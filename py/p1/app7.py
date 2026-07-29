s = "Python is easy"
words = []
word =""
for ch in s:
    if ch !=" ":
        word +=ch
    else:
        words.append(word)
        word=""

words.append(word)

for i in range(len(words)-1,-1,-1):
    print(words[i],end=" ")