s = 'banana'
result = ''
for ch in s:
    if ch not in result:
        result = result + ch
    
print(result)