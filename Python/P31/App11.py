r= 6
for i in range(1, r+1):
    for sp in range(1, r - i + 1):
        print(" ",end="")
    for j in range(i):
        print("* ", end="")
    print()