string = "hello world"
vowels = "aeiouAEIOU"

c=0
for char in string:
    if char in vowels:
        c+=1
print("Number of vowels :- ", c)