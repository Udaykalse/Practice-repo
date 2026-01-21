class D:
    def __get__(self, obj, owner):
        obj.__dict__.pop('x', None)
        return
class A:
    x = D()

a = A()
a.x = 3

print(a.x, a.__dict__)