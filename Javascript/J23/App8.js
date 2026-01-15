let n = 7;
let is = true;
for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    is = false;
    break;
  }
}

console.log(is)