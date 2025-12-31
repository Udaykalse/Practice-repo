text = "Python is fun"

def check_Start_With(s,str):
    return s.startswith(str)


starts=check_Start_With(text,"Python")
print("startswith():", starts)