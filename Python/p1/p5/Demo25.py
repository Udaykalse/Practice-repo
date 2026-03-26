password="abc123"
for i in range(3):
    p=input("ENtre Password:- ")
    if p==password:
        print("Login Successful")
        break
else:
    print("Account Locked")