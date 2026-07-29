arr = [1,2,3,2,4,5,6,7,5,4,3,0]
for i in range(len(arr)):
    count =0
    for j in range(len(arr)):
        if arr[i]== arr[j]:
            count +=1

    if count > 1:
        already = False
        for k in range(i):
            if arr[k]==arr[i]:
                already= True
        if not already:
            print(arr[i]) 