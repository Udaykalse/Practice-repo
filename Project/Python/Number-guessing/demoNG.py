import random

print("Hi! Wlcome to the Number guessing Game. \nYou have 7 chance To guess.......... \nLet's Start :-")

low = int(input("Entre The Lower Bound :- "))
high = int(input("Entre The Higher Bound :- "))

print(f"\nYou & chances To guess The NUmber Between {low} and {high} . \nLet's Start....! ")

num = random.randint(low,high)
ch = 7 
gc  = 0

while gc < ch :
    gc +=1
    guess = int(input("Entre Your Guess :- "))

    if guess == num :
        print(f'Correct ! the Number is {num}. you guessed it in the {gc} attempts.')
        break
    elif gc>=ch and guess !=num:
        print(f'Sorry! The number was {num}. Better luck next time.')
    elif guess > num:
        print("Too High! Try a lower number.")
    elif guess < num:
        print("Too Low! Try a higher number.")

    if gc == ch:
         print(f"Sorry! The number was {num}. Better luck next time.")