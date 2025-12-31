person = {"name": "Uday", "age": 25, "city": "Pune"}


extra_info = {"profession": "Developer"}
def merege_Dicts(di,d2):
    new_Dict=di.copy()
    new_Dict.update(d2)
    return new_Dict


mereged=merege_Dicts(person,extra_info)

print("update():", mereged)  