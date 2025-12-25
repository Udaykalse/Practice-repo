def add(x,y):
    return x+y

def substract(x,y):
    return x-y


def multiply(x,y):
    return x*y

def divide(x,y):
    return x/y

print('Select Operation')
print('1. Addition')
print('2. Subtraction')
print('3. Multiplication')
print('4. Division')

while True:
    operationChoice=input('Enter Operation Choice (1/2/3/4) :- ')
    if operationChoice in ('1' , '2' , '3' , '4'):
        try:
            num1=float(input("Enter First Number :- "))
            num2=float(input("Enter Second Number :- "))
        except ValueError:
            print('Invalid input. Please enter a number.')
            continue
        if operationChoice == '1':
            print(num1 , '+' , num2 , "=" , add(num1,num2))
        elif operationChoice == '2':
            print(num1 , '-' , num2 , "=" , substract(num1,num2))
        elif operationChoice == '3':
            print(num1 , '*' , num2 , "=" , multiply(num1,num2))
        elif operationChoice == '4':
            print(num1 , '/' , num2 , "=" , divide(num1,num2))
        next_Calculation=input("Let's Do Next Calculation ? (yes/No) : -")
        if next_Calculation == 'no':
            break
    else:
        print('Invalid Input')
        

