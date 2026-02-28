class Base:
    def add(self,x):
        return x+10

class Derived(Base):
    def test(self,x):
        return super().add(x)
    
print(Derived().test(5))