function findMissing(arr, n) {
  const t = (n * (n + 1)) / 2;
  const sum = arr.reduce((a, b) => a + b, 0);
  return t - sum;
}
console.log(findMissing([1, 2, 4, 5], 5));
