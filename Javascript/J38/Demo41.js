const n = 10;

const arr = Array.from({ length: n }, (_, i) => i + 1);
// OR
const arrSpread = [...Array(n)].map((_, i) => i + 1);

console.log("Array:", arr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]