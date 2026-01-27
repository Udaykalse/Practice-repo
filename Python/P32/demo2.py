arr = [1,2,3,4,3,2,1]
u = []
for  i in range(len(arr)):
    is_Duplicate = False

    for j in range(len(u)):
        if arr[i] == u[j]:
            is_Duplicate = True
            break
    
    if not is_Duplicate:
        u.append(arr[i])


print(u)