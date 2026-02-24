var climbStairs = function (n) {
  if (n <= 2) return 2;
  let a = 1,
    b = 2;
  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

console.log(climbStairs(5))