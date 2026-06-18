let arr = [1, 2, 3, 2, 4, 1];

let result = arr.length - [...new Set(arr)].length;

console.log(result);
