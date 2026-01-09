import fetch from "node-fetch";
import readline from "readline";

class currencyConverter {
  constructor(url) {
    this.url = url;
    this.rates = {};
  }
  async init() {
    const response = await fetch(this.url);
    const data = await response.json();
    if (!data.success) {
      throw new Error(`API Error : ${JSON.stringify(data)}`);
    }
    this.rates = data.rates;
  }
  convert(fromCurrency, toCurrency, amount) {
    let initialAmount = amount;

    if (fromCurrency !== "EUR") {
      amount = amount / this.rates[fromCurrency];
    }
    amount = (amount * this.rates[toCurrency]).toFixed(2);
    console.log(
      `\n ${initialAmount} ${fromCurrency} = ${amount} ${toCurrency}`
    );
  }
}

function showCurrency(currencyMap) {
  console.log("\n🌍 Major World Currencies");
  console.log(" - ".repeat(30));
  for (const key in currencyMap) {
    console.log(`${key}, ${currencyMap[key]}`);
  }
  console.log("-".repeat(30));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question) {
  return new Promise((res) => rl.question(question, res));
}

async function main() {
  const YOUR_ACCESS_KEY = "b0bdb859b01e9d007c66d29a1cff0a0a";
  const url = `https://data.fixer.io/api/latest?access_key=${YOUR_ACCESS_KEY}`;

  const converter = new currencyConverter(url);
  await converter.init();
  const currencyMap = {
    1: "INR",
    2: "USD",
    3: "EUR",
    4: "JPY",
    5: "CNY",
    6: "GBP",
    7: "AUD",
    8: "CAD",
  };

  showCurrency(currencyMap);

  const fromChoice = await askQuestion("Select FROM currency (number):");
  const toChoice = await askQuestion("Select TO currency (number):");
  const amount = await askQuestion("Enter amount: ");

  const fromCurrency = currencyMap[fromChoice];
  const toCurrency = currencyMap[toChoice];

  converter.convert(fromCurrency, toCurrency, parseFloat(amount));
  rl.close();
}

main();
