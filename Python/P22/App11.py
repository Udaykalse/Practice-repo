arr = [1,2,3,4]

ev = od = 0

for x in arr:
    if x % 2==0:
        ev +=1
    else:
        od +=1

print(ev, od)