string = "madam"
reversed_string = ""

for char in string:
    reversed_string=char+reversed_string
if string==reversed_string:
    print("Palindrome")
else:
    print("Not Palindrome")