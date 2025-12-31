from functools import partial

def greet_bind(greeting,name, punctuation):
    return f"{greeting}, {name} {punctuation}"



greet_Basu=partial(greet_bind,"Hey","Basu")

mSG=greet_Basu("!!!")

print("bind equivalent():", mSG) 