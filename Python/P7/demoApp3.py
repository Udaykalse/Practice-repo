def final_Price(*prices,dis=10):
    total = sum(prices)
    return total -  (total * dis/100)

print(final_Price(100,200,300))
print(final_Price(100,200,400, dis=20))