def sLargest(nums):
    unique = list(set(nums))
    unique.sort()
    return unique[-2]

print(sLargest([10, 20, 4, 45, 45, 99]))