var count = function (n) {
  let a = 1,
    b = 2;

  for (let i = 2; i <= n; i++) {
    let temp = (a + b) % (1e9 + 7);
    a = b;
    b = temp;
    s;
  }
  return (b * b) % (1e9 + 7);
};
console.log(count(1));
