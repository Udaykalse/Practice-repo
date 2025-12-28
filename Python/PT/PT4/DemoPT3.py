
def person(name,**kwiArgs):
    print('Name :- ',name)
    for k,v in kwiArgs.items():
        print(k  ," : ", v)
    

person(loc='Pune',name='Parvej',age=24,tech='Python')