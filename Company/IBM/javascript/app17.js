function fib(num) {
  if (num <= 1) return num;
  let a = 0,
    b = 1;
  for (let i = 2; i <= num; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

console.log(fib(6));
