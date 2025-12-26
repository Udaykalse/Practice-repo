from array import *

arr1=array('i',[1,2,3,4,5])
# arr2=array('i',arr1.tolist())
# arr2=array(arr1.typecode,arr1.tolist())
arr2=array(arr1.typecode,(n for n in arr1))



arr1[3]=34
print(arr1)
print(arr2)

