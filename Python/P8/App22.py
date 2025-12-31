def greet_Apply(greeting,name,punctuation):
    return f"{greeting} , {name} {punctuation}"

args={"Hi", "Aman","!!"}

MSG=greet_Apply(*args)
print("apply equivalent():", MSG) 