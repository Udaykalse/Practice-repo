const numbers = [10, 5, 8, 25, 15, 20];

const unqiue = [...new Set(numbers)].sort((a, b) => b - a);
const secondLargest = unqiue[1];
console.log(secondLargest)
