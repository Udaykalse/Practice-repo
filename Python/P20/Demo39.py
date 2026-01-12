data = [10,'a', 25, 3.5,40]

max_val = None
for x in data:
    if type(x) in(int,float):
        if max_val is None or x > max_val:
            max_val= x
print(max_val)