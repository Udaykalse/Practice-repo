import time

# Path to the log file you want to monitor
LOG_FILE = "sample.log"

# Keywords to watch for
ERROR_KEYWORDS = ["ERROR", "FAIL", "EXCEPTION"]

def monitor_logs(file_path):
    """Monitors a log file in real-time for errors."""
    with open(file_path, "r") as file:
        # Move to the end of the file
        file.seek(0, 2)
        while True:
            line = file.readline()
            if not line:
                time.sleep(1)  # wait for new line
                continue
            check_line(line.strip())

def check_line(line):
    """Check if the line contains any error keywords."""
    for keyword in ERROR_KEYWORDS:
        if keyword in line:
            print(f"[ALERT] Found '{keyword}' in log: {line}")

if __name__ == "__main__":
    print("Starting Real-Time Log Monitor...")
    monitor_logs(LOG_FILE)
