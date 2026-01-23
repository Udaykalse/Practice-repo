class Meta(type):
    def __new__(cls, name, bases, dct):
        return super().__new__(cls, name, (), dct)
    

class A(metaclass=Meta):pass
class B(A):pass

print(B.__bases__)