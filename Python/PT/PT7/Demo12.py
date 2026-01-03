class A:
    def show(self):
        print('A in Show')
    

class B(A):
    def show(self):
        print('B in Show')

o1 = B()
o1.show()