n = 7

is_Prime = True

if n < 2:
    is_Prime = False
else:
    for i in range(2,n):
        if n % i == 0:
            is_Prime = False
            break

print(is_Prime)