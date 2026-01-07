def slow():
    s = 0
    for i in range(10_000):
        s += i*i
    return s

def fast():
    return sum(i*i for i in range(10_000))
print(slow())
print(fast())