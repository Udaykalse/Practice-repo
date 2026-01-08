
def unique(lst):
    seen = set()
    result = []
    for x in lst:
        if x not in seen:
            result.append(x)
            seen.add(x)
    return result

print(unique([1,2,3,2,3,1]))