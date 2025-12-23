users = ["uday", "admin", "guest"]
new_user = "admin1"

found=False
for u in users:
    if u==new_user:
        found=True

if found:
    print('Usename Alredy Exist')
else:
    print('Username Availble')