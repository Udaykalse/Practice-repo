function increasePrice(productsPrice) {
  const increasedProductsPrice = productsPrice.map(function (price) {
    const finalPrice = price + price * 0.1;
    return finalPrice;
  });
  return increasedProductsPrice;
}
let ProductsPrice = [100, 200, 300, 400];
console.log(
  `Actual Price of Product :- ${ProductsPrice} Increase each price by 10% ${increasePrice(
    ProductsPrice
  )}`
);
console.log();
