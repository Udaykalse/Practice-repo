function contains(arr, value) {
  for (let c of arr) {
    if (c === value) return true;
  }
  return false;
}
console.log(contains([1, 2, 3], 3));
