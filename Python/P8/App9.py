numbers = [1, 2, 3, 4, 5]

def filter_even(lsT):
    return[num for num in lsT  if num % 2==0]


even_Num=filter_even(numbers)
print('FIlter Method Example :- ', even_Num)
