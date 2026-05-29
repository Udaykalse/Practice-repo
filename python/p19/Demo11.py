s = "I love Python"
words = s.split()

rev =[]

for i in range (len(words) -1 , -1 , -1):
    rev.append(words[i])


print(" ".join(rev) )