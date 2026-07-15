s = "ab@12#"
count = 0

for ch in s:
    if not ch.isalnum():
        count += 1

print(count)
