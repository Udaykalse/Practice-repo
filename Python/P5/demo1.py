def employee(**info):
    for k in info:
        print(k,info[k])

employee(name="Sidharth",role="Developer",salary=5000)