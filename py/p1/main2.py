str = "Education"
count =0
for ch in str.lower():
    if ch in "aeiou":
        count +=1

print(count)