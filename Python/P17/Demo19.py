data = bytes([10,20,30,40,50])

with open('data.bin','wb') as f:
    f.write(data)

print("Binary file written")