let arr = [1, 2, 3, 4, 5, 7];
let n = 7;
let total = (n * (n + 1)) / 2;

let sum = arr.reduce((a, b) => a + b, 0);

console.log(total - sum);
