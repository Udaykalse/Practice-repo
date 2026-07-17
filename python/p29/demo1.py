def flatten(lst):
    res = []
    for i in lst:
        if isinstance(i, list):
            res.extend(flatten(i))
        else:
            res.append(i)
    return res

print(flatten([1, [2, 3], [4, [5]]]))