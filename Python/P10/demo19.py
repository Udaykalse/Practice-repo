nums  = []
for i in range(3):
    nums.append(i)

print(nums)

nums1 = [1,2 ]

nums1.extend([3,4])
print(nums1)


chars = ['a']
chars.extend('bc')

print(chars)


func = []
func.extend([lambda x: x+1, lambda x: x*3])
for i in range(len(func)):
    result = func[i](10)
    print({i}, {result})