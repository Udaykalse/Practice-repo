class Log:
    def __get__(self,obj,ow):
        print('get')
        return 10

class A:
    x = Log()

print(A().x)