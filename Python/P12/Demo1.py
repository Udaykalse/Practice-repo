def calculate_Tax(price):
    return price* 1.05

def save_To_DB(order_Details):
    print(f"Saving {order_Details} to DB.....")

def notify_User(email):
    print(f"Sending email to {email}....")


def process_Order_refined(item, price, email):
    total = calculate_Tax(price)
    save_To_DB({'item':item, 'total': total})
    notify_User(email)
    return total

result = process_Order_refined('ABC', 3000, 'parvejS@gmail.com')
print(result)