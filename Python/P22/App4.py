s = '12345'

is_dig = True

for ch in s:
    if ch < '0' or ch >'9':
        is_dig = False
        break

print(is_dig)