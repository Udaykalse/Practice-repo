s = 'madam'

flag = True
for i in range(len(s)//2):
    if s[i]!=s[-i-1]:
        flag = False
print(flag)