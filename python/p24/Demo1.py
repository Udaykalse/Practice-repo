s = "hello world"
words = s.split()
result = []

for w in words:
    result.append(w.capitalize())

print(" ".join(result))
