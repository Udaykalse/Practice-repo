let arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [0]]]]];

let result = arr.toString().split(",").map(Number);

console.log(result);
