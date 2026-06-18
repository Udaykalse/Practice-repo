let arr = [1, 5, 3, 2, 4, 90, 35];

let result = [...new Set(arr)].sort((a, b) => b - a)[1];
console.log(result);
