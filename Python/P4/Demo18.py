def employee(**info):
    for key in info:
        print(key , info[key])
    
employee(name='Siddharth',role='hor',salary=50000)