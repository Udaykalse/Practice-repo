numbers = [3, 7, 1, 9, 5]

small=numbers[0]
for num in numbers:
    if num<small:
        small=num
print('Smallest :-', small)