let arr = [5, 2, 9, 1, 6, 2, 9, 5];

let unique = [...new Set(arr)].sort((a, b) => b - a);

console.log(unique)