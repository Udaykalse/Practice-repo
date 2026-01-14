s = 'madam'
i ,j = 0, len(s)-1
is_Pal = True

while i < j:
    if s[i] != s[j]:
        is_Pal = False
        break
    i += 1
    j -= 1



print(s == s[::-1])