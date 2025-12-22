products = ["Phone","Laptop","Tablet"]
search = "Laptop"

found=False

for p in products:
    if p==search:
        found=True
    
print(found)