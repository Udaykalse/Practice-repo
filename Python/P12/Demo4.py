def to_Fahrenheit(celsius):
    return (celsius * 9/5) + 32


def log_Conversion(c , f):
    print(f"{c}°C  is {f}°F")


def process_Temp(celsius):
    f = to_Fahrenheit(celsius)
    log_Conversion(celsius, f)


process_Temp(25)