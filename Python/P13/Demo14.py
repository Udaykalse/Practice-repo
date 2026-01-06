prices = {'Apple': 50, 'Orange':30, 'Banana':20 }
sortedP=dict(sorted(prices.items(), key = lambda item:item[1]))
print(sortedP)