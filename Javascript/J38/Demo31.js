const num = 12345;

const sum = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);

console.log("Sum of digits:", sum); // Output: 15