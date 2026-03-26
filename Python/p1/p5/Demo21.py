arr=[1,2,3,4,5]

even=[]
odd=[]
for x in arr:
    (even if x%2==0 else odd).append(x)

print(even , odd)