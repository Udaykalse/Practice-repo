n = 5
for i in range(n, 0, -1):
    spa = " "*(n-i)
    num = " ".join(str(x) for x in range(1, i+1))
    print(spa + num)