def makeFilter(limit, seen=[]):
    return lambda x:x>limit and not seen.append(x)
f = makeFilter(2)
print(list(filter(f,[1,2,3,4,3,5])))