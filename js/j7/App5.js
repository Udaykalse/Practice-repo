function is_Prime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function findPrimes(arr) {
  let result = [];
  for (let num of arr) {
    if (is_Prime(num)) result.push(num);
  }
  return result;
}

console.log(findPrimes([1, 2, 3, 4, 5, 6, 7]));
