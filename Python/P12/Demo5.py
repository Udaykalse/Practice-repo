def apply_Discount(price):
    return price * 0.90

def print_Receipt(original, final):
    print(f"Original : ${original} | Discounted : ${final}")


def handle_Sale(price):
    final = apply_Discount(price)
    print_Receipt(price, final)


handle_Sale(100)