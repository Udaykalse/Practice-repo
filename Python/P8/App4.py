def unique_list(itM):
    result=[]
    for value in itM:
        if value not in result:
            result.append(value)
    return result

arr = ['a','b','c','z','s','c','a','b']
print(unique_list(arr))