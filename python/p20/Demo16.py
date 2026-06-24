s = 'Udaysinh'
count = 0
for ch in s.lower():
    if ch.isalpha() and ch not in 'aeiou':
        count = count + 1
    
print(count)