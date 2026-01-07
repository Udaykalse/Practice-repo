import timeit

print(timeit.timeit("sum (i*i for i in range(1000))", number=1000))