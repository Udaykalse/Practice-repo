s = 'madam'
rev = ""
for i in range(len(s) -1,-1,-1):
    rev+=s[i]

print(s==rev)