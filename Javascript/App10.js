let num = 7;
let is_prime = true;
if (num <= 1) return false;

for (let i = 2; i < num; i++) {
  if (num % 2 === 0) {
    is_prime = false;
    break;
  }
}

console.log(is_prime);
