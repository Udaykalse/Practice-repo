s = 'pYthOn'
result= ""

for ch in s:
    if ch.isupper():
        result = result + ch.lower()
    else:
        result = result + ch.upper()

print("Before Swap :- ",s)
print("After Swap :- ",result)