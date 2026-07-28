#!/usr/bin/env python3

import getpass

# -----------------------------
# Bank Database
# -----------------------------
accounts = {
    "uday": {
        "pin": "1234",
        "balance": 1000,
        "history": []
    },
    "aman": {
        "pin": "2222",
        "balance": 2000,
        "history": []
    },
    "sidharth": {
        "pin": "3333",
        "balance": 3000,
        "history": []
    }
}


# -----------------------------
# Login
# -----------------------------
def login():
    while True:
        username = input("\nEnter Username: ").lower()

        if username not in accounts:
            print("Invalid Username")
            continue

        attempts = 3

        while attempts:
            pin = getpass.getpass("Enter PIN: ")

            if pin == accounts[username]["pin"]:
                print("\nLogin Successful!\n")
                return username

            attempts -= 1
            print(f"Incorrect PIN. Attempts Left: {attempts}")

        print("\nCard Locked!")
        exit()


# -----------------------------
# Balance
# -----------------------------
def balance(user):
    print(f"\nCurrent Balance : €{accounts[user]['balance']}")


# -----------------------------
# Withdraw
# -----------------------------
def withdraw(user):
    try:
        amount = float(input("Amount to Withdraw: €"))

        if amount <= 0:
            print("Invalid amount.")
            return

        if amount % 10 != 0:
            print("Withdraw in multiples of €10.")
            return

        if amount > accounts[user]["balance"]:
            print("Insufficient Balance.")
            return

        accounts[user]["balance"] -= amount
        accounts[user]["history"].append(f"Withdraw: -€{amount}")

        print("Withdrawal Successful.")
        balance(user)

    except ValueError:
        print("Enter a valid number.")


# -----------------------------
# Deposit
# -----------------------------
def deposit(user):
    try:
        amount = float(input("Amount to Deposit: €"))

        if amount <= 0:
            print("Invalid amount.")
            return

        if amount % 10 != 0:
            print("Deposit in multiples of €10.")
            return

        accounts[user]["balance"] += amount
        accounts[user]["history"].append(f"Deposit: +€{amount}")

        print("Deposit Successful.")
        balance(user)

    except ValueError:
        print("Enter a valid number.")


# -----------------------------
# Change PIN
# -----------------------------
def change_pin(user):
    old = getpass.getpass("Current PIN: ")

    if old != accounts[user]["pin"]:
        print("Incorrect PIN.")
        return

    new = getpass.getpass("New PIN: ")

    if len(new) != 4 or not new.isdigit():
        print("PIN must contain exactly 4 digits.")
        return

    confirm = getpass.getpass("Confirm PIN: ")

    if confirm != new:
        print("PIN Mismatch.")
        return

    accounts[user]["pin"] = new
    print("PIN Changed Successfully.")


# -----------------------------
# Transaction History
# -----------------------------
def history(user):
    print("\nTransaction History")

    if not accounts[user]["history"]:
        print("No transactions available.")
        return

    for item in accounts[user]["history"]:
        print(item)


# -----------------------------
# Menu
# -----------------------------
def menu(user):

    while True:

        print("""
==============================
         ATM MENU
==============================
1. Balance
2. Withdraw
3. Deposit
4. Change PIN
5. Transaction History
6. Exit
==============================
""")

        choice = input("Choose Option: ")

        if choice == "1":
            balance(user)

        elif choice == "2":
            withdraw(user)

        elif choice == "3":
            deposit(user)

        elif choice == "4":
            change_pin(user)

        elif choice == "5":
            history(user)

        elif choice == "6":
            print("Thank you for using our ATM.")
            break

        else:
            print("Invalid Choice.")


# -----------------------------
# Main
# -----------------------------
user = login()
menu(user)