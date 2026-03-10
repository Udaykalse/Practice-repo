let arr = [10, 5, 8, 20, 15];

let unque = [...new Set(arr)].sort((a, b) => b - a);
console.log(unque[1]);
