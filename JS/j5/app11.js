const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
];

const prices = products.map((pr) => pr.price);
console.log(
  "Total ",
  " : ",
  prices.reduce((a, b) => a + b, 0),
  "Prices :- ",
  prices,
);
