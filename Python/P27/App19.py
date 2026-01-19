number=123
sum_digits=0
temp=number
while temp >0:
    digit=temp%10
    sum_digits+=digit
    temp=temp//10
print("Sum of digits:", sum_digits)