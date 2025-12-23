password='abc123'
count=0

for _ in password:
    count+=1


if count>=8:
    print("Valid Password")
else:
    print("Invalid Password")