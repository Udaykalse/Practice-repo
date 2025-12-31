person = {"name": "Uday", "age": 25, "city": "Pune"}

def get_property(d,key):
    return d.get(key)

age=get_property(person,"age")
print("get():", age)