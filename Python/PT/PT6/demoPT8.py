# Inner Function

def outer():
    print("In Outer Function")

    def inner():
        print("In Inner Function")
    # inner()
    return inner


somthing=outer()
somthing()