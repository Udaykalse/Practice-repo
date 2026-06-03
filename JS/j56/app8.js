function factNumber(num) {
  if (num === 0 || num === 1) return 1;
  return num * factNumber(num - 1);
}

console.log(factNumber(5))
