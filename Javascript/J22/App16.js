let arr = [1, [2, 3], [4, 5]];

let result = [...new Set(arr.flat())];

console.log(result)
