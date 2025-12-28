def add(num1,*num2):
    sum = num1
    for n in num2:
        sum+=n
    return sum


result=add(1,2,3,4,5)
print(result)