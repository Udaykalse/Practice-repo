def fib(num):
    if num<=1:return  num
    a,b=0,1
    for _ in range(2,num+1):
        a,b=b,a+b
    return b

print(fib(6))