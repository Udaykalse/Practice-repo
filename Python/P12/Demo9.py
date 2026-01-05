def calculate_Area(radius):
    return 3.14 * (radius ** 2)


def show_Result(area):
    print(f"The Area is :-  {area :.2f}")


def run_gemotry_Tool(r):
    res = calculate_Area(r)
    show_Result(res)


run_gemotry_Tool(5)