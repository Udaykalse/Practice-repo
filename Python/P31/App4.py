class A:
    def f(self): return A

class B:
    def f(self): return B

class C(A):pass
obj = C()

C.__bases__=(B,)
print(obj.f())