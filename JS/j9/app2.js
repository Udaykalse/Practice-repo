function calculation(num1, num2, oprationNumber) {
  if (oprationNumber === 1) {
    let result = num1 + num2;
    return result;
  } else if (oprationNumber === 2) {
    let result = num1 - num2;
    return result;
  } else if (oprationNumber === 3) {
    let result = num1 * num2;
    return result;
  } else if (oprationNumber === 4) {
    let result = num1 % num2;
    return result;
  }
}

console.log(calculation(10, 2, 3));
