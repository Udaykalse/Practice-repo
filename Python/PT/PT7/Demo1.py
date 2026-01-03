class computer:

    def __init__(self,cpu,ram,ssd):
        self.CPU = cpu
        self.RAM = ram
        self.SSD = ssd

    def config(self):
        print('Config :- ', self.CPU, self.RAM, self.SSD)

com1 = computer('i9','32GB','2TB')
# computer.config(com1)
# com1.config()
print(com1)
com1.config()

