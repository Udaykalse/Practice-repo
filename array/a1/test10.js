function fib(n) {
  let a = 0,
    b = 1;
  let result = [a, b];
  for (let i = 1; i < n; i++) {
    let temp = a + b;
    result.push(temp);
    a = b;
    b = temp;
  }
  return result;
}

console.log(fib(8));
