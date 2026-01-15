arr = [10,20,4,65,90,99]

l = s = -1

for i in arr:
    if i > l:
        s = l
        l = i
    elif i > s and i != l:
        s = i
    
print(s)