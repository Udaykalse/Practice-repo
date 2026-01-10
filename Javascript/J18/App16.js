function convertToUpperCase(products) {
  const productName = products.map(function (itM) {
    return itM.toUpperCase();
  });
  return productName;
}

console.log(convertToUpperCase(["mobile", "laptop", "mouse"]));
