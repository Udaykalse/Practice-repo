def fact(num):
    res = 1
    for i in range(2,num+1):
        res *= i
    return res

print(fact(5))