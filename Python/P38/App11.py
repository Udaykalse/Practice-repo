def countVOw(s):
    vow = 'aeiouAEIOU'
    v = 0
    c =0
    for ch in s:
        if ch.isalpha():
            if ch in vow:
                v += 1
            else:
                c +=1
    return v,c


print(countVOw("hello"))