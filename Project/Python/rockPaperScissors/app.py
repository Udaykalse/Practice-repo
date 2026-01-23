import random

def play_Game():
    options = ['rock', "paper", 'scissors']
    print("-------- Welcome to Game --------")

    while True:
        user_Choice = input("\n Entre Rock, Paper, or Scissors (or 'q' to quite)").lower()

        if user_Choice == 'q':
            print("Thanks for Playing")
            break

        if user_Choice not in options:
            print("Invalid Choice")
            continue
        computer_Choice = random.choice(options)
        print(f"Computer chose :- {computer_Choice}")

        if user_Choice == computer_Choice:
            print("Its Tie !")
        elif (user_Choice == 'rock' and computer_Choice == 'scissors') or \
             (user_Choice == 'paper' and computer_Choice == 'rock') or \
             (user_Choice == 'scissors' and computer_Choice == 'paper'):
            print("U WIn")
        else:
            print("COmputer Win")

play_Game()