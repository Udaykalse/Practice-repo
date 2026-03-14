function factorial(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

console.log(factorial(5));

let a = 5 * 4;
console.log(a);
let b = a * 3;
console.log(b);
let c = b * 2;

console.log(c);
let d = c * 1;

console.log(d);
