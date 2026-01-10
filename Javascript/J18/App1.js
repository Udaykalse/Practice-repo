let products = [1200, 5500, 999, 8000];

function findCostlyProduct(products) {
  const productsList = products.find(function (p) {
    return p > 5000;
  });
  return productsList;
}

console.log(
  `ALL Products ${products} and More than ₹5000 :- ${findCostlyProduct(
    products
  )}`
);
