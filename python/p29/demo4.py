def secondLargestNumber(nums):
    largest = second = float('-inf')
    for n in nums:
        if n > largest:
            second = largest
            largest = n
        elif n > second and n != largest:
            second = n
    return second


print(secondLargestNumber([1,2,3,4,5]))
