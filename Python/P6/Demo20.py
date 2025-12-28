import cv2,numpy as np

img = cv2.imread('./pexe.jpg',0)
h,w = img.shape

grid = []

for r in range(3):
    row =[]
    for c in range(3):
        block = img[r*h//3:(r+1)*h//3,c*w//3:(c+1)*w//3] 
        row.append(int(block.mean()))
    grid.append(row)

print("\n🟦 Regional Brightness Materix: \n")
for r in grid:
    print(r)