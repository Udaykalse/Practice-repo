x = int(input("Entre ur marks:- "))

if x >= 90 and x <= 100:
    print("A")
elif x <= 89 and x>=75:
    print("B")
elif  60 <= x and x <= 74:
    print("C")
elif x <=59 and x >=40:
    print("D")
elif x < 40:
    print("f")
else:
    print("Not Found")



# 90–100 → A
# 75–89  → B
# 60–74  → C
# 40–59  → D
# Below 40 → F    