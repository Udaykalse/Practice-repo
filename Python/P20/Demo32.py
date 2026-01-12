import os

folder_Path  = './../P11'
for i , file in enumerate(os.listdir(folder_Path)):
    os.rename(file, f"file_{i}.py")