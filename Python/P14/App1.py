import time
import schedule

schedule.every().second.do(lambda:print("Hello"))
while True:
    schedule.run_pending()
    time.sleep(1)