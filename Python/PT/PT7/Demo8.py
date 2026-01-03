
class A:
    def f1(self):
        print("F1 Works")
    
    def f2(self):
        print("F2 Works")
    
    def show(self):
        print("In A show")


class B():
    def f3(self):
        print("F3 Works")
    
    def f4(self):
        print("F4 Works")
    
    def show(self):
        print("In B show")
    
class C(A,B):
    def f5(self):
        print("F5 Works")
    
    # def show(self):
    #     print("In C show")

obj1 = C()
# obj1.f1()
# obj1.f4()
obj1.show()













