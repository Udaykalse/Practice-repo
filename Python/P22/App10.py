arr = [1,2,3,4]

ev = len([x for x in arr if x % 2 == 0])
od = len(arr)-ev

print(ev, od)