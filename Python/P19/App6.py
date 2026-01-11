numbers = [3, 7, 1, 9, 5]
larg=numbers[0]
for num in numbers:
    if num>larg:
        larg=num
print("Largest number:", larg)