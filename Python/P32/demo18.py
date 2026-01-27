arr = [1,2,3,2,1,4,3,2,5,1,3,345,6,66,6666,5,44,312,1234,1253454,6,4,32,1,6,5,4,32,1]
un = []

for x in arr:
    if x not in un:
        un.append(x)

print(un)