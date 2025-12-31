numbers = [1, 2, 3, 4, 5]

def sum_list(lsT):
    t=0
    for num in lsT:
        t+=num
    return t

sum_num=sum_list(numbers)
print("Reduce Method :- ",sum_num)