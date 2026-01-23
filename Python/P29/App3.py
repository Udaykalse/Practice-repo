s = 'radear'
is_Pa = True
for i in range(len(s) // 2):
    if s[i] != s[len(s) - 1 - i]:
        is_Pa = False
        break

print(is_Pa)
