email='test@gmail.com'
has_At=False
has_Dot=False

for ch in email:
    if ch =='@':
        has_At=True
    if ch=='.':
        has_Dot=True


if has_At and has_Dot:
    print('Valid Email')
else:
    print('Invalid Email')