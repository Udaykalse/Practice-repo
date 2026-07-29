
arr = [1,2,1,3,2,4,3,5,4,6]


res = []

for num in arr:
    if num not in res:
        res.append(num)


print(res)