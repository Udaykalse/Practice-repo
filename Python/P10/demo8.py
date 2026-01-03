names = ['Parvej' , 'Amey']
upCase = []

for n in names:
    upCase.append((lambda x:x.upper())(n))


print(upCase)