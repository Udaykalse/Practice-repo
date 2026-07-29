num = 153
temp = num
res = 0

while temp > 0:
    digit = temp % 10
    res  += digit**3
    temp //=10

print(res == num)