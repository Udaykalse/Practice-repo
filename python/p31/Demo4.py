s = "I love programming"
words = s.split()
longest = ""

for w in words:
    if len(w) > len(longest):
        longest = w

print(longest)
