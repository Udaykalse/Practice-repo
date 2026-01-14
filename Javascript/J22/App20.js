function operation(sign, num1, num2) {
    let result
    if (sign === 1) {
    result = num1 + num2;
  } else if (sign === 2) {
    result = num1 - num2;
  } else if (sign === 3) {
    result = num1 * num2;
  } else if (sign === 4) {
    result = num1 / num2;
  } else {
    return "Invalid Operation";
  }
  return result
}

let resultOpration = operation(1, 3, 5);
console.log(resultOpration);
