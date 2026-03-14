function calculator(num1, num2, operationNumber) {
  switch (operationNumber) {
    case 1:
      return num1 + num2;
    case 2:
      return num1 - num2;
    case 3:
      return num1 * num2;
    case 4:
      return num1 % num2;
    default:
      return "Invalid Operation";
  }
}

console.log(calculator(4, 5, 1));
