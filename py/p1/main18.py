arr = [1,2,2,3,4,4,1]
freq={}
for num in arr:
    freq[num]=freq.get(num,0)+1

print(freq)