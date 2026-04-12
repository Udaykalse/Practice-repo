s = 'ab12cd34t56'
count = 0 
for ch in s:
    if ch.isdigit():
        count = count + 1
    
print(count)
