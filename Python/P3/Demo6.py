profile = {"name":"Uday","email":"abc@gmail.com","mobile":"98765"}

complete=True
for k in profile:
    if profile[k]=="":
        complete=False

print("Complete" if complete else "Incomplete")