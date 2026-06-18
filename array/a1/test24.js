let arr = [10, 2, 3, 4];
let third = [...new Set(arr)].sort((a, b) => b - a)[2];
console.log(third);
