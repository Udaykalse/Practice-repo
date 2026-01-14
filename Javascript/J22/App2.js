let arr = [10, 5, 20, 8];

let sorted = [...new Set(arr)].sort((a, b) => b - a);
console.log(sorted[1])
