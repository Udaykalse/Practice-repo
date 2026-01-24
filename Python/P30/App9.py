arr = [1, 2, 2, 3, 4, 4]
result = []

for i in arr:
    if i not in result:
        result.append(i)

print(result)
