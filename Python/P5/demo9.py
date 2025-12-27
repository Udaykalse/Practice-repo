s = '  First Name '
res = ""
for ch in s:
    if ch == " ":
        res = res + "_"
    else:
        res = res+ch

print(res)