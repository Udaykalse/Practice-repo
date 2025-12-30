#   Decorators in Python

def log_Daco(func):
      def wrap(*args, **Kargs):
            print("Vales :- ", *args)
            result = func(*args)
            print("Result :- ", result)
            return result
      return wrap


def greater_First(func):
        def wrap(a , b):
              if a<b:
                    a , b = b , a
              return func(a , b)
        return wrap 

@log_Daco
@greater_First
def divide (a,b):
    return a / b

@log_Daco
def sub(a,b):
      return a - b

@log_Daco
def Add(a,b,c):
      return a + b + c

result2 = divide(2,140)
print(result2)


print("--------------------------------")
sub = greater_First(sub)
result1 = sub(20,104)
print(result1)


print("--------------------------------")

result3 = Add(20,104,30)
print(result3)