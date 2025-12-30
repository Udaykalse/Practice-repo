nums = [9,1,6,8,2,3,7,3,5,4]

evens = list(filter(lambda n : n % 2 == 0,nums))

double = list(map(lambda n : n * 2 , evens))
print("Evens :- ",evens)
print("Doubles:-",double)