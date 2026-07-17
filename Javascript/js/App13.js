let arr = [10, 5, 20, 8, 30];

arr.sort((a, b) => b - a);
console.log(arr[1]);

console.log("----------------");

let max = Math.max(...arr);
let secondMax = Math.max(...arr.filter((num) => num !== max));

console.log(secondMax)


console.log("----------------");














