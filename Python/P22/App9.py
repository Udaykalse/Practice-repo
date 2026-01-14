arr = [1,2,3,4,3,2,1,5]

un = []

for n in arr:
    if n not in un:
        un.append(n)


print(un)