import string
import random

length = int(input("Entre password length :- "))
print(''' Choose Cha Set for Password From These : 
      1. Letters
      2. Digits
      3. Special Char
      4. Exits
''')

characterList = ""

while (True):
    choice = int(input('Pick a Number:-  '))
    if(choice == 1):
        characterList += string.ascii_letters
    elif (choice == 2):
        characterList += string.digits
    elif (choice == 3):
        characterList += string.punctuation
    elif(choice ==  4):
        break
    else:
        print("Please pick a valid Option")

password = []


for i in range(length):
    randomchar = random.choice(characterList)
    password.append(randomchar)

print("The Random password is " + "".join(password))