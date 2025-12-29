let prices = [100, 200, 300];

console.log("Traditional Way");
let getPrices = [];

for (var i = 0; i < prices.length; i++) {
  getPrices.push(prices[i] * 1.18);
}

console.log(getPrices)
console.log("----------------------------------");

console.log("Modern Way");
let gstPrices = prices.map((price) => price * 1.18);
console.log(gstPrices);
