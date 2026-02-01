let num = 17;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);
