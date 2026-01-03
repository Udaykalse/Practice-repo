class computer:

    hor = 'Uday Ai'

    def __init__(self,cpu,ram,ssd):
        # Instance Varible
        self.CPU = cpu    
        self.RAM = ram
        self.SSD = ssd

    def config(self):
        print('Config :- ', self.CPU, self.RAM, self.SSD)

    @classmethod
    def info(cls):
        return cls.hor
    
    @staticmethod
    def gb_to_bytes(gb):
        return gb * (1024 ** 3) 

com1 = computer('i9','32GB','2TB')
# computer.config(com1)
# com1.config()
# print(com1)
# com1.config()
print(computer.info())
print(computer.gb_to_bytes(16))


