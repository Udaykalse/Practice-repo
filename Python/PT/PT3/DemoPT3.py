from array import *

arr1=array('d',[1.2,4.8,6.7,-1.3,4.5])

# print(type(arr1))
# print(arr1.buffer_info())

for n in arr1:
    if n<0:
        continue
    print(n)