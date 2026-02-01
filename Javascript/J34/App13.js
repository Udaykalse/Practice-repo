let num = 17;
let isPrime =
  num > 1 && [...Array(num).keys()].slice(2).every((i) => num % i !== 0);
console.log(isPrime);
