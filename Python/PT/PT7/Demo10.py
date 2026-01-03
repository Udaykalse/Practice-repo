class Laptop:                             #Duck
    def build(self):
        print("Laptop Build")
    # def F1(self):
    #     print("F1 Works")

class Desktop():
    def build(self):
        print("Desksop Build")

class Parvej:
    def twach(self,machine : Laptop):
        print("Online show")
        machine.build()


    # def F2(self):
    #     print("F2 Works")

asus_Rog = Laptop()
hp = Desktop()


obj1 = Parvej()
# obj1.twach(asus_Rog)
obj1.twach(hp)
