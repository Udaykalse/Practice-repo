arr = [1, 2, 3, 4, 5]
n = len(arr)

for i in range(n // 2):
    arr[i] , arr[n - 1 - i] = arr[n - 1- i], arr[i]

print(arr)