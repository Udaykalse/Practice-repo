function convert1stToUpperCase(products) {
  const firstCharToUpper = products.map(function (itM) {
    const firstChar = itM.charAt(0).toUpperCase() + itM.slice(1);
    return firstChar;
  });
  return firstCharToUpper
}

console.log(convert1stToUpperCase(["mobile", "laptop", "mouse"]));