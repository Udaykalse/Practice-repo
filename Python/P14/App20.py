import shelve

with shelve.open('mydata') as db:
    print(db['score'])