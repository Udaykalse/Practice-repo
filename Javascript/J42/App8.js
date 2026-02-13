let arr = [2, 4, 5, 61, 1, 0];
let unique = [...new Set(arr)];
unique.sort((a, b) => a - b);
console.log(unique[unique.length - 2]);
