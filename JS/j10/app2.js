function calculator(num1, num2, operationNumber) {
  const Operations = {
    1: num1 + num2,
    2: num1 - num2,
    3: num1 * num2,
    4: num1 % num2,
  };
  return Operations[operationNumber] || "Invalid Operation";
}

console.log(calculator(4, 11, 1));
