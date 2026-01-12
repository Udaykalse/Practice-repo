s = 0
for i in range(1,6):
    if i == 3:
        continue
    s+=i
    if s > 6:
        continue
    print(s)