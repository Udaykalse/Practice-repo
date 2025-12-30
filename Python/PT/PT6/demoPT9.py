# Inner Function

def outer():
    print("In Outer Function")

    def Inner():
        print("In Inner Function")
    Inner()

outer()