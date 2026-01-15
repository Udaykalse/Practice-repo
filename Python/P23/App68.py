s = 'madam1'
rev = ""

for i in range(len(s)-1, -1, -1):

    rev +=s[i]

if s == rev:
    print("Palindrome")
else:
        print("Not Palindrome")



