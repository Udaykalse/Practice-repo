import requests

API_KEY = 'fca_live_jcTmuMtNCvfsMv9FqB6CWym8NDXh33SQL24kUQsL'
BASE_URL = f"https://api.freecurrencyapi.com/v1/latest?apikey={API_KEY}"

CURRENCIES = ["INR", "EUR", "AUD", "USD"]

def convert_Currency(base):
    currencies = ",".join(CURRENCIES)
    url = f"{BASE_URL}&base_currency={base}&currencies={currencies}"
    try:
        response = requests.get(url)
        data = response.json()
        # print(data)
        return data["data"]
    except:
        print("Invalid currency")
        return None


while True:
    print(CURRENCIES)
    base =input('Entre the base currency(q for quit) :- ').upper()

    if base == "Q":
        break
    data = convert_Currency(base)
    if not data:
        continue

    del data[base]
    for key, value in data.items():
        print(f"{key} : {value}")

