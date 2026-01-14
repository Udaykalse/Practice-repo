n = 5
a,b = 0,1
print(list([a := b, b:= a+b][0] for  _ in range(n)))