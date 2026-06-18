function fib(num) {
  let a = 0,
    b = 1;
  for (let i = 0; i < num; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
}
fib(8);
