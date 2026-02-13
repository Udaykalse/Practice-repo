let arr = [2, 4, 5, 61, 1, 0];
arr.sort((a, b) => a - b);

console.log("Ascending :- ", arr);

arr.sort((a, b) => b - a);
console.log("Descending :- ", arr);
