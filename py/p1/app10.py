arr = [2,4,6,8,10]
sorted_List = True
for i in range(len(arr)-1):
    if arr[i]>arr[i+1]:
        sorted_List=False
        break

print(sorted_List)