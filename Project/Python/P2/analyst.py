import io
from pathlib import Path
import textwrap
import numpy as np
import pandas as pd
import matplotlib
matplotlib.use("Agg")  # safe for headless environments
import matplotlib.pyplot as plt

# Optional duckdb
try:
    import duckdb
except Exception:
    duckdb = None

# ----------------- Load data -----------------
def _looks_like_csv(raw_bytes: bytes) -> bool:
    try:
        sample = raw_bytes[:1024].decode(errors="ignore")
        return "," in sample and "\n" in sample
    except Exception:
        return False


def load_data(file_or_path) -> pd.DataFrame:
    """Load CSV, Excel, or JSON into DataFrame"""
    if isinstance(file_or_path, (str, Path)):
        p = Path(file_or_path)
        s = p.suffix.lower()
        if s == ".csv":
            return pd.read_csv(p)
        if s in (".xls", ".xlsx"):
            return pd.read_excel(p)
        if s == ".json":
            return pd.read_json(p)
        return pd.read_csv(p)

    # file-like object (Streamlit upload)
    name = getattr(file_or_path, "name", None)
    suffix = Path(name).suffix.lower() if name else None
    raw = file_or_path.read()
    if isinstance(raw, str):
        raw = raw.encode("utf-8")

    bio = io.BytesIO(raw)

    if suffix == ".csv" or (suffix is None and _looks_like_csv(raw)):
        bio.seek(0)
        return pd.read_csv(bio)
    if suffix in (".xls", ".xlsx"):
        bio.seek(0)
        return pd.read_excel(bio)
    if suffix == ".json":
        bio.seek(0)
        return pd.read_json(bio)

    bio.seek(0)
    try:
        return pd.read_csv(bio)
    except Exception:
        bio.seek(0)
        return pd.read_json(bio)


# ----------------- Column type detection -----------------
def _detect_column_types(df: pd.DataFrame):
    numeric = df.select_dtypes(include=[np.number]).columns.tolist()
    datetime_cols = []

    for c in df.columns:
        try:
            sample = df[c].dropna().astype(str).head(20)
            parsed = pd.to_datetime(sample, errors="coerce")
            if parsed.notna().sum() >= max(1, len(sample) // 2):
                datetime_cols.append(c)
        except Exception:
            pass

    categorical = [
        c for c in df.columns
        if c not in numeric + datetime_cols and df[c].nunique(dropna=True) <= 50
    ]

    return {
        "numeric": numeric,
        "datetime": datetime_cols,
        "categorical": categorical,
    }


# ----------------- Prompt suggestions -----------------
def suggest_prompts(df: pd.DataFrame, max_suggestions: int = 8):
    types = _detect_column_types(df)
    numeric = types["numeric"]
    datetime_cols = types["datetime"]
    categorical = types["categorical"]

    suggestions = [
        "Summarize the dataset in 5 bullet points."
    ]

    if categorical:
        suggestions.append(f"Show the top 10 counts for the categorical column '{categorical[0]}'.")

    if numeric:
        suggestions.append("Show summary statistics for numeric columns.")
        suggestions.append(f"Create a histogram of the numeric column '{numeric[0]}'.")

    if len(numeric) >= 2:
        suggestions.append(f"Create a scatter plot comparing '{numeric[0]}' (x) vs '{numeric[1]}' (y).")

    if datetime_cols:
        suggestions.append(f"Show counts per month using the datetime column '{datetime_cols[0]}'.")

    suggestions.append("Find anomalies using z-score > 3 on numeric columns.")

    return suggestions[:max_suggestions]


# ----------------- Prompt → Code -----------------
def prompt_to_code(prompt: str, df: pd.DataFrame):
    p = prompt.lower()

    if p.startswith("summarize the dataset"):
        return textwrap.dedent("""
            result = {
                "rows": len(df),
                "columns": len(df.columns),
                "missing_values": df.isnull().sum().to_dict()
            }
        """)

    if "summary statistics" in p:
        return "result = df.describe().T"

    if "histogram" in p:
        return textwrap.dedent("""
            df.select_dtypes(include='number').hist(figsize=(6,4))
            result = None
        """)

    if "scatter plot" in p:
        return textwrap.dedent("""
            df.plot.scatter(x=df.columns[0], y=df.columns[1])
            result = None
        """)

    if "anomalies" in p:
        return textwrap.dedent("""
            from scipy import stats
            numeric = df.select_dtypes(include='number').dropna()
            z = np.abs(stats.zscore(numeric))
            result = df[(z > 3).any(axis=1)].head(20
        """)

    return None
