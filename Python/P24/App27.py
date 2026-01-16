import cv2
import numpy as np

img = cv2.imread('1.webp',0)
heatmap = cv2.applyColorMap(img, cv2.COLORMAP_JET)
if img is None:
    print("❌ Image not loaded. Check file path or format.")
    exit()

cv2.imshow('Heatmap', heatmap)
cv2.waitKey(0)
cv2.destroyAllWindows()