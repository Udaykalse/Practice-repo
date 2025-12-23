attempts=[False,False,False]
count=0

for a in attempts:
    if a==False:
        count+=1
    
if count>=3:
    print("Account Blocked")
else:
    print('Try Again')