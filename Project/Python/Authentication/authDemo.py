import getpass

database= {"ParvejS123@gmail.com" : "54321" , "Sidharthko221@gmail.com":"09876"}

uName = input('Entre Ur UserName :- ')
password = getpass.getpass("Entre Password")

for i in database.keys():
    if uName == i:
        while password != database.get(i):
            password = getpass.getpass("Entre Again:- ")
        break

print('Varidied')