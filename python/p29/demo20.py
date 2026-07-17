def move_Zeros(nums):
    nums.sort(key=lambda x:x==0)
    return nums

print(move_Zeros([0, 1, 0, 3, 12]))