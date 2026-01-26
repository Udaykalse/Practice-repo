function calculate(a, b, arith) {
  let ans = arith(a, b);
  console.log(ans);
}
function sum(a, b) {
  return a + b;
}

calculate(2, 5, sum);
