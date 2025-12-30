from functools import reduce


nums = [9,1,6,8,2,3,7,3,5,4]

evens = list(filter(lambda n : n % 2 == 0,nums))

double = list(map(lambda n : n * 2 , evens))

sum = reduce(lambda a,b : a + b,double)

print("Evens :- ",evens)
print("Doubles:-",double)
print("Sum of D :-", sum)