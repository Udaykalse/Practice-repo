class Device:
    def __init__(self,name):
        print("Init Called For :- ",name)
        self.name = name.upper()
    
    def show(self):
        print("Device :- ",self.name) 
    

d1 = Device("Laptop")
d2 = Device("Computer")

d1.show()
d2.show()

