def binary(a,t):
    l , r = 0,len(a)-1
    while l <= r:
        mid = (l + r)//2
        if a[mid]==t:
            return mid
        elif a[mid]<t:
            l = mid +1
        else:
            r = mid-1

    return -1


print(binary([1,3,5,7],5))