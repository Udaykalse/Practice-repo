const arr = [1, 2, 2, 3, 1, 4, 2];
const freq = arr.reduce((a, n) => {
  a[n] = (a[n] || 0) + 1;
  return a;
}, {});
console.log(freq)
