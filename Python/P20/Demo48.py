text = 'hello world'
vowels = 'aeiouAEIOU'

count = sum(1 for ch in text if ch in vowels)
    
print(count)