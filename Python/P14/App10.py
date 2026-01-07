import shelve

with shelve.open('mydata') as db:
    if 'name' in db:
        del db['name']
        print("key 'name' Deleted")
