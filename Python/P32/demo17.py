r = 5
n = 5
for i in range(1, r + 1):
    print("  " * (r - i) + " *" * (2 * i -1))

for i in range(r -1, 0, -1):
    print("  " * (n - i) + " *" * (2 * i - 1))