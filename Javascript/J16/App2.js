function sumArray(arr) {
  let total = 0;
  for (let itm of arr) {
    total += itm;
  }
  return total;
}

console.log(sumArray([1, 2, 3]));
