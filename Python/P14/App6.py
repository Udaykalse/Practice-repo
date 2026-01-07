import shelve

with shelve.open('mydata') as db:
    print(list(db.keys()))