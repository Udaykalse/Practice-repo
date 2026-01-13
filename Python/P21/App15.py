num1 = float(input("Entre The first Number for addition :- "))
num2 = float(input("Entre The second Number for addition :- "))

op = int(input('Entre the opration number \n 1. add\n 2. sub\n 3. mul\n 4. div110 :- '))



if op == 1:
    result = num1 + num2
elif op == 2:
    result = num1 - num2
elif op == 3:
    result = num1 * num2
elif op == 4:
    result = num1 % num2
else:
    print('Invalid Operation')

print(result)