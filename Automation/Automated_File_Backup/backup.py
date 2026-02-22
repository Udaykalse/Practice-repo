import os
import shutil
import datetime
import schedule
import time

source_dir = "/home/uday/Pictures/Leetcode/automation"
destination_dir = "/home/uday/Pictures/Leetcode/destination"


def copy_folder_to_dir(source, dest):
    today = datetime.date.today()
    dest_dir = os.path.join(dest, str(today))

    try:
        shutil.copytree(source, dest_dir)
        print(f"Folder copied to: {dest_dir}")
    except FileExistsError:
        print(f"Folder already exists in: {dest_dir}")
    except Exception as e:
        print("Error:", e)


schedule.every().day.at("13:28").do(copy_folder_to_dir, source_dir, destination_dir)


while True:
    schedule.run_pending()
    time.sleep(30)