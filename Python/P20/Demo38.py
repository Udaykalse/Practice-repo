data = [10,'a', 25, 3.5,40]

max_val = [x  for x in data if isinstance (x , (int, float))]
print(max(max_val))