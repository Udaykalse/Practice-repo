class Account:
    def __init__(self,name, bal):
        self.name = name
        self.bal = bal

    def __str__(self):
        return f'{self.name} | {self.bal}'
    
    def __add__(me , you):
        return Account('Combined :- ', me.bal + you.bal)
    
    def __gt__(self,other):
        return self.bal > other.bal


u1 = Account('Parvej', 2100)
u2 = Account('Uday', 2000)
combined = u1 + u2
print(u1)
print(u2)

print(combined)


if u1 > u2:
    print('Parvej suck')
else:
    print('Uday fvck')