let arr = [1, 2, 4, 5];
let n = 5;
let total = (n * (n + 1)) / 2;
let sum = 0;
for (let num of arr) sum += num;
console.log(total - sum);
