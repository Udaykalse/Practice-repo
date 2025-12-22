t=(1,2,3)

flag=True
for i in range(len(t)-1):
    if t[i]>t[i+1]:
        flag=False

print(flag)