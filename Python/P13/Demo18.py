nested = [[1,2],[3,4],[9,0]]

flat = [item for sublist in nested for item in sublist]
print(flat)