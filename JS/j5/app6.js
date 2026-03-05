const nums = [1, 2, 3, 4, 5, 6];
const even = nums.filter((num) => num % 2 === 0);
const odd = nums.filter((num) => num % 2 !== 0);

console.log("Even :- ", even, " : ", "Odd :- ", odd);
