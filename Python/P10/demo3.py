n  = 5
for i in range (n):
    print(" " * (n - i - 1) + "* " * (i + 1))


print('--------------------------------------------')



for i in range(n, 0, -1):
    print(" " * (n - i )+ "* " * i)