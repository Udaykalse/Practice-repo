def sumDigit(num):
    return sum(int(d) for d in str(abs(num)))

print(sumDigit(123))