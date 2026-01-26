import qrcode

data = input('Entre text or url:- ')
qr = qrcode.make(data)
qr.save('qrcode.png')
print("QR Successfully Generated")
