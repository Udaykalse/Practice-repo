def sum_Int(lst):
    return sum(x for x in lst if type(x)==int)

print(sum_Int([1, "hello", 2.5, 4, True]))