x = 10
def outer():
    x = 5
    return map(lambda y:y + x , range(3))
x =20

result = list(outer())
print(result)