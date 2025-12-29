let a = [1, 2, 3];
let b = a.reduce((a, b) => b + a, 0);
console.log(b);

console.log("--------------------------");

let total = 0;
for (var i = 0; i < a.length; i++) {
  total += a[i];
}

console.log(total)
