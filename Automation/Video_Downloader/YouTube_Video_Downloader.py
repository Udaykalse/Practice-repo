from pytube import YouTube

import tkinter as tk

from tkinter import filedialog

def download_Video(url, save_Path):
    try:
        # yt = YouTube(url)
        yt = YouTube(url, use_oauth=False, allow_oauth_cache=True)
        print(yt)
        streams = yt.streams.filter(progressive=True,file_extension="mp4")
        print(yt.streams)
        highest_res_stream = streams.get_highest_resolution()
        highest_res_stream.download(output_path=save_Path)
        print("Successfull")
    except Exception as e:
        print(e)


def open_file_dialog():
    folder = filedialog.askdirectory()
    if folder:
        print(f"Selected Folder :- {folder}")
    return folder


if __name__ == "__main__":
    root = tk.TK()
    root.withdraw()

    video_URL = input("Youtube Url :- ")
    save_dir = open_file_dialog()

    if  save_dir:
        print("Started ....")
        download_Video(video_URL,save_dir)
    else:
        print("Invalid location")


# # url = "https://www.youtube.com/watch?v=zT7niRUOs9o"
# url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
# save_Path = "/home/uday/practice/Automation/Video_Downloader/video"
# # save_Path = "uday@uday:~/practice/Automation/Video_Downloader/video$"

# download_Video(url,save_Path)