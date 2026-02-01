s = 'hello world'
print(sum(1 for ch in s if ch.lower() in 'aeiou'))