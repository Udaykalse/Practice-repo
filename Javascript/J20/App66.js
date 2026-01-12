function getTotal(prices) {
  var sum = 0;
  for (var i = 0; i < prices.length; i++) {
    sum += prices[i];
  }
  return sum;
}

console.log(getTotal([10, 20, 30]));
