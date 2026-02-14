let arr = [5, 2, 9, 1, 6, 2, 9, 5];
let unique = arr.filter((num, idX) => arr.indexOf(num) === idX);
unique.sort((a, b) => a - b);
console.log(unique)
