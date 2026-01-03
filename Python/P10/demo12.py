ops = {'double':lambda x:x*2}
print(ops.get('double')(5))

info = {'sco':[10, 20]}
print(info.get('sco'))

stud = {'Parvej' : 1 , "Amey ": 2}
for key in stud:
    print(stud.get(key))