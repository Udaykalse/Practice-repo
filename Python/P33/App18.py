arr = [1,2,2,3,4,5,4,33,2,2,1]
unique = []
for i in arr:
    if i not in unique:
        unique.append(i)

print(unique)