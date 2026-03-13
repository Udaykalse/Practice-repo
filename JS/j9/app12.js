function sum(arr, i = 0) {
  if (i === arr.length) return 0;
  return arr[i] + sum(arr, i + 1);
}

console.log(sum([10, 20, 30]));
