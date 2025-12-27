url='https://google.com/login'

protocol,*rest=url.split("://")

print(protocol)
print(rest)