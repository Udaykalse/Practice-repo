num=9
is_prime=True
if num >1:
    for i in range(2,num):
        if num%i==0:
            is_prime=False
            break
else:
    is_prime=False
print("Is prime:", is_prime)