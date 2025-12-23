var product = {
  id: 101,
  name: "Laptop",
  price: 5000,
};

var count = 0;

for (var key in product) {
  count++;
}

console.log(count)