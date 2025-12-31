def num_Num(itM):
    total=0
    for value in itM:
        if isinstance(value ,(int,float)):
            total+=value
    return total


arr = ['a', None, 1, 2, 3, 'b']
print(num_Num(arr))