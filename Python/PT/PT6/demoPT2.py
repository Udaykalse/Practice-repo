nums = [2,1,3,4,5,3,6,7,8,90,0]

# def is_Even(n):
#     return n % 2 == 0

is_Even =  lambda n : n % 2 == 0
evens=list(filter(is_Even,nums))

print(evens)