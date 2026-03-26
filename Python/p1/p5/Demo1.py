def freq(s):
    d={}
    for ch in s:
        d[ch]=d.get(ch,0)+1
    return d


print(freq('Hello'))