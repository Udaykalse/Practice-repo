n = 5
for i in range(1, n + 1):
    spa = " "*(n-i)
    num = " ".join(str(x) for x in range(1, i+1))
    print(spa + num)