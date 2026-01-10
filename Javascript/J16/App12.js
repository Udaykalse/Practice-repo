function sum_digit(num) {
  let sum = 0;
  let str = num.toString();
  for (let char of str) {
    sum += Number(char);
  }
  return sum;
}

console.log(sum_digit(1234));
