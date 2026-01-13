class A:
    def __setattr__(self, k, v):
        super().__setattr__(k,v*2)

a = A()
a.x = 3
print(a.x)
        