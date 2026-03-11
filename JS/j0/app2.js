let n = 7,
  prime = true;

for (let i = 2; i < n; i++) {
  if (n % i == 0) prime = false;
}
console.log(prime);
