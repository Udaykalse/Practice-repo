def sum_Int(lst):
    total = 0
    for x in lst:
        if type(x)==int:
            total = total+x
    return total

print(sum_Int([1, "hello", 2.5, 4, True]))