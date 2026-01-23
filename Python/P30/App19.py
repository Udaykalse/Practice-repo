x  = 1
def f():
    global x
    x += 2
x = x+f()
print(x)