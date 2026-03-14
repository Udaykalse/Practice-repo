function calculator(num1, num2, operationNumber) {
  const operations = {
    1: (a, b) => a + b,
    2: (a, b) => a - b,
    3: (a, b) => a * b,
    4: (a, b) => a % b,
  };
  if (!operations[operationNumber]) {
    return "Invalid Operation";
  }
  return operations[operationNumber](num1, num2);
}

console.log(calculator(4, 5, 1));
