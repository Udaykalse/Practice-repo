def isNumPali(num):
    s = str(abs(num))
    return s == s[::-1]

print(isNumPali(121))