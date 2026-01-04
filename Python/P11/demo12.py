data = ['10', '20', 'Parvej', '30' ]
cllean_Data = list(map(int,filter(lambda x:x.strip().isdigit(),data)))
print(cllean_Data)