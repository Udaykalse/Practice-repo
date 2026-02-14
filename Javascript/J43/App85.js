let arr = ["A", "X", "B", "Y", "A", "Z", "B"];

let unique = arr.filter((a, b) => arr.indexOf(a) === b);
console.log(unique);
