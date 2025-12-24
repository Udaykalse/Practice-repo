def add_To_Cart(*iTm):
    cart=[]
    for itm in iTm:
        cart.append(itm)
    print(cart)


add_To_Cart('Phone','Laptop','Pen')