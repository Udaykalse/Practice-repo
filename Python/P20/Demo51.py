text = 'hello world'
vowels = 'aeiouAEIOU'

count = 0

for i in text:
    if i in vowels:
        count+=1
    
print(count)