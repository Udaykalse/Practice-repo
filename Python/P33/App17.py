arr = [1,2,3,4]
sorted_Flag = True
for i in range(1, len(arr)):
    if arr[i] < arr[i - 1]:
        sorted_Flag = False
        break

print(sorted_Flag)