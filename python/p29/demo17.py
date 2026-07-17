def  maxNumber(arr):
    max_val = arr[0]
    for num in arr:
        if num > max_val:
            max_val = num
    return max_val

print(maxNumber([10,5,20,90]))