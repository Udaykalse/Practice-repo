x = int(input("Enter your marks: "))

if 90 <= x <= 100:
  print("A")
elif 75 <= x <= 89:
  print("B")
elif 60 <= x <= 74:
  print("C")
elif 40 <= x <= 59:
  print("D")
elif 0 <= x < 40:
  print("F")
else:
  print("Invalid Marks! Please enter a number between 0 and 100.")