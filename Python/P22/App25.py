s = 'education'

v = 'aeiou'

c = sum(1 for ch in s if ch in v)
print(c)