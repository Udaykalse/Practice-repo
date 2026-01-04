words = ['cat', 'apple', 'dog', 'banana']
long = list(filter(lambda w:len(w)>3,words))
print(long)