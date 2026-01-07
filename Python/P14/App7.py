import shelve


with shelve.open('mydata') as db:
    db['score'] = [1,2,3,4,5]

print('Data Saved')