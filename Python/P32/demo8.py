arr = [1,2,3,2,1,4,3,2,5,4,32,1,6,5,4,32,1]
un = []

for i in range(len(arr)):
    is_Duplicate = False

    for j in range(len(un)):
        if arr[i] == un[j]:
            is_Duplicate= True
            break
    
    if not is_Duplicate:
        un.append(arr[i])

print(un)