let arr = ["a", "x", "y", "b", "z"];
arr.sort((a, b) => a.localeCompare(b));

console.log("Ascending :- ", arr);

arr.sort((a, b) => b.localeCompare(a));
console.log("Descending :- ", arr);
