class A:
    def __init__(self):
        print("In A init")
    def F1(self):
        print("F1 Works")


class B(A):
    def __init__(self):
        super().__init__()
        print("In B init")

    def F2(self):
        print("F2 Works")



obj1 = B()
obj1.F1()