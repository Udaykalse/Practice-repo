const num = 5;

const factorial = (n) => {
    return n <= 1 ? 1 : n * factorial(n - 1);
};

console.log("Factorial:", factorial(num)); 