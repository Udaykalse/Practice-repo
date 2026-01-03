class Sample:
    def __new__(cls):
        print("Inside __new__")
        return super().__new__(cls)
    
    def __init__(self):
        print("Inside __init__")


    def show(self):
         print("Inside show()")
        
    

obj1 =Sample()
obj1.show()

obj2 = Sample.__new__(Sample)
obj2.__init__()

obj2.show()
