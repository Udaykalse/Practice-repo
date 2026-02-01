arr = [5,1,8,90]
first = second = float('-inf')

for i in arr:
    if i > first:
        second = first
        first = i
    elif i > second and i != first:
        second = i

print(second)