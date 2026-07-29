
arr = [10,0,98,9]

largest = second = float('-inf')

for num in arr:
    if num > largest:
        second = largest
        largest =num
    elif num > second and num!=largest:
        second=num
    


print(second)