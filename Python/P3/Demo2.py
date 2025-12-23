products = ["Phone","Laptop","Tablet"]
search ="laptop"

found=False
for p in products:
    if p==search:
        found=True
    
print("Found" if found else "Not Found")