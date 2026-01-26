def calculate(a,b,arith):
    ans = arith(a,b)
    print(ans)


def sum(a,b):
    return a+b

calculate(1,2,sum)