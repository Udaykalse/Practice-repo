def remove_Duplicates(s):
    result =""
    for ch in s:
        if ch not in result:
            result += ch
    return result


print(remove_Duplicates("banana"))