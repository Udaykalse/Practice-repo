import shelve

with shelve.open('mydata') as db:
    print('name' in db)