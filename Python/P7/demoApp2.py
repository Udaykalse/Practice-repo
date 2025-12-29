discount =  lambda price , d=5: price - (price * d / 100)

total =  lambda *nums:sum(nums)

def rec_sum(n):
    if n == 0:
        return 0
    return n + rec_sum(n-1)


print(discount(100))      
print(discount(100, 20)) 