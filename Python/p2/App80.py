n =5
for i in range(n):
    for j in range(n-i-1):
        print(" ", end="")
    for s in range(2*i+1):
        print("*", end="")
    print()
        