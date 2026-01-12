text = 'Parvej Siddharth'

c = 0

for ch in text:
    if ch in 'aeiouAEIOU':
        c = c+1
    
print(c)