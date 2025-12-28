



count = 1
def greet():
    global count
    if count < 11:
        print(count)
        count = count + 1
        greet()
        return
    
greet()