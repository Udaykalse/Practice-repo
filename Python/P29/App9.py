arr = [1, 20, 4, 45, 45, 99]
f = s = -float('inf')
for n in arr:
    if n > f:
        s = f
        f = n
    elif n > s and n != f:
        s = n
    
print(s)