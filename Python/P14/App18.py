import shelve

with shelve.open('mydata') as db:
    db['name']='Parvej'
    db['age']=21

print('Data Saved')