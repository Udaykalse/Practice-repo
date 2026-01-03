nums = [1,2,3]
squ = {}
for n in nums:
    squ[n] = (lambda x:x *x)(n)

print(squ)