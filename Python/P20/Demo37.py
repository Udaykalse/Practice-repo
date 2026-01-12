data = [10,'a', 25, 3.5,40]

print(max(filter(lambda x: isinstance(x, (int, float)),data)))