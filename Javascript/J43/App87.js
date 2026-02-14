let arr = [10, 5, 99, 2];

let max = arr.reduce((a, c) => (c > a ? c : a));
let min = arr.reduce((a, c) => (c < a ? c : a));

console.log(max)
console.log(min)

