numbers = [1, 2, 2, 3, 4, 4]
unique_nums=[]
for num in numbers:
    if num not in unique_nums:
        unique_nums.append(num)
print("List without duplicates:", unique_nums)