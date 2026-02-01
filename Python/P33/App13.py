s = 'hello world'
vo = 'aeiouAEIOU'
c = 0

for ch in s:
    if ch in vo:
        c +=1

print(c)