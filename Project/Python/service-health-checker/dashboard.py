import pandas as pd # type: ignore
import matplotlib.pyplot as plt

CSV_FILE = "service_metrics.csv"

df = pd.read_csv(CSV_FILE)

df = df[df["latency_ms"] != "N/A"]
df["latency_ms"] = df["latency_ms"].astype(float)

plt.figure()
for service in df["service"].unique():
    service_data = df[df["service"] == service]
    plt.plot(service_data["timestamp"], service_data["latency_ms"], label=service)

plt.xlabel("Timestamp")
plt.ylabel("Latency (ms)")
plt.title("Service Latency Dashboard")
plt.legend()
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()
