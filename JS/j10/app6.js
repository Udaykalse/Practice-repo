let arr = [1, 2, 4, 5];
let n = 5;
let sum = (n * (n + 1)) / 2;
let arrSum = arr.reduce((a, b) => a + b, 0);
console.log(sum - arrSum);
