data='123456'
valid=True

for ch in data:
    if ch < '0' or ch >'9':
        valid =False
    
print("Valid" if valid else "Invalid")