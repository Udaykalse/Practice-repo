arr = [1,0,3,0,5,0,7]
res = []
for num in arr:
    if num !=0:
        res.append(num)

for num in arr:
    if num == 0:
        res.append(num)

print(res)