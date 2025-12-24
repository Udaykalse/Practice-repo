def payment(*amt):
    total=0
    for amount in amt:
        total+=amount
    print(total)

payment(100,200,300)