import requests

class CurrencyConverter:
    def __init__(self, url):
        data = requests.get(url).json()

        if not data.get("success"):
            raise Exception(f"API Error: {data}")

        self.rates = data["rates"]

    def convert(self, from_currency, to_currency, amount):
        initial_amount = amount

        # Convert to EUR first
        if from_currency != "EUR":
            amount = amount / self.rates[from_currency]

        # Convert from EUR to target currency
        amount = round(amount * self.rates[to_currency], 2)

        print(f"\n✅ {initial_amount} {from_currency} = {amount} {to_currency}\n")


def show_currency_menu(currency_map):
    print("\n🌍 Major World Currencies")
    print("-" * 30)
    for key, value in currency_map.items():
        print(f"{key}. {value}")
    print("-" * 30)


if __name__ == "__main__":
    YOUR_ACCESS_KEY = "b0bdb859b01e9d007c66d29a1cff0a0a"
    url = f"https://data.fixer.io/api/latest?access_key={YOUR_ACCESS_KEY}"

    converter = CurrencyConverter(url)

    currency_map = {
        1: "INR",
        2: "USD",
        3: "EUR",
        4: "JPY",
        5: "CNY",
        6: "GBP",
        7: "AUD",
        8: "CAD"
    }

    show_currency_menu(currency_map)

    from_choice = int(input("Select FROM currency (number): "))
    to_choice = int(input("Select TO currency (number): "))
    amount = float(input("Enter amount: "))

    from_currency = currency_map[from_choice]
    to_currency = currency_map[to_choice]

    converter.convert(from_currency, to_currency, amount)
