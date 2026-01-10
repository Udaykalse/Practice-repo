function areAllInStock(products) {
  const productsStocks = products.every(function (product) {
    return product.inStock === true;
  });
  return productsStocks;
}

console.log(
  areAllInStock([
    { name: "Pen", inStock: true },
    { name: "Notebook", inStock: true },
  ])
);
