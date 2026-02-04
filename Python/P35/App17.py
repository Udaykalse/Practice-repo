num=1534
sum_of_cubes=0
temp=num
while temp>0:
    digit=temp%10
    sum_of_cubes+=digit**3
    temp=temp//10
if num ==sum_of_cubes:
        print("Armstrong number")
else:
    print("Not Armstrong number")