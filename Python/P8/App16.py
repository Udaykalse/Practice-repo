person = {"name": "Uday", "age": 25, "city": "Pune"}


def get_itMs(d):
    return list(d.items())


Entries=get_itMs(person)
print("items() :- ",Entries)