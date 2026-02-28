def elementGet(arr,idX):
    try:
        return arr[idX]
    except:
        return -1

print(elementGet([1,2,3],4))