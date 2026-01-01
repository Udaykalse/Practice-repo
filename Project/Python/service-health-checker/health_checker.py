import requests
import time
import csv
from datetime import datetime

SERVICES = {
    "Google": "https://www.google.com",
    "GitHub": "https://www.github.com",
    "Oracle": "https://www.oracle.com"
}

CHECK_INTERVAL = 30  # seconds
CSV_FILE = "service_metrics.csv"

def check_service(name, url):
    try:
        start_time = time.time()
        response = requests.get(url, timeout=5)
        latency = round((time.time() - start_time) * 1000, 2)

        return {
            "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "service": name,
            "status_code": response.status_code,
            "latency_ms": latency,
            "status": "UP"
        }
    except Exception:
        return {
            "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "service": name,
            "status_code": "N/A",
            "latency_ms": "N/A",
            "status": "DOWN"
        }

def write_to_csv(data):
    file_exists = False
    try:
        with open(CSV_FILE, "r"):
            file_exists = True
    except FileNotFoundError:
        pass

    with open(CSV_FILE, "a", newline="") as file:
        writer = csv.DictWriter(file, fieldnames=data.keys())
        if not file_exists:
            writer.writeheader()
        writer.writerow(data)

if __name__ == "__main__":
    print("Starting Service Health Checker...")
    while True:
        for name, url in SERVICES.items():
            result = check_service(name, url)
            write_to_csv(result)
            print(result)
        time.sleep(CHECK_INTERVAL)
