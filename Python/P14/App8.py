import shelve

with shelve.open('mydata', writeback=True) as db:
    db['age'] +=1

print('Value Updated')
