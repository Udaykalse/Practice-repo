person = {"name": "Uday", "age": 25, "city": "Pune"}

def get_values(d):
    return list(d.values())


Values=get_values(person)
print("values():", Values)