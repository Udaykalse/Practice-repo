from abc import ABC,abstractmethod


class paymentGatw(ABC):
    @abstractmethod
    def pay(self):
        pass


class Udaypal(paymentGatw):
    def pay(self):
        print("Paying  with Udaypal")


class paypal(paymentGatw):
    def pay(self):
        print("Paying  with paypal")


class pur:
    def __init__(self,hatw):
        self.gatW=hatw
    
    def checlOut(self):
        print("Checking Out.........")
        self.gatW.pay()
    

gat1=paypal()
gat2=Udaypal()

purch = pur(gat2)
purch.checlOut()