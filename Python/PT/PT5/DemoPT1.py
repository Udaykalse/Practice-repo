a = 10                          # Global Variable

def abc():
    a = 15                      # Local Variable
    globals()['a']=20           # Global Variable Changed here
    print("Inside : - ",a)

abc()
print("OutSide :- ",a)