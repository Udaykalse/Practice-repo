from functools import reduce


def cube(n):
    sum = list(map(lambda n : n * n * n , n))
    print('Cube of List :- ',sum)
    return reduce(lambda a , b : a + b , list(map(lambda n : n * n * n , n)))
n = [2,3,4]

total = reduce(lambda a , b : a + b , list(map(lambda n : n * n * n , n)))
print(reduce(lambda a , b : a + b , list(map(lambda n : n * n * n , n))))