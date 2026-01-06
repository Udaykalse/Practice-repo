res = {'status':200, 'data' : 'OK','time':'1s'}

status, *rest = res
print(status)
print(rest)
