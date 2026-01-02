words = ['cat','car','dog']
c = 0
for w in words:
    print(w.startswith('c'))
    if w.startswith('c') : 
        c+=1

print(c)