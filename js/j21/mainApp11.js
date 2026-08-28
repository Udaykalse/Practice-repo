function countOccurrence(arr, val) {
  let c = 0;
  for (let x of arr) {
    if (x === val) c++;
  }
  return c;
}
console.log(countOccurrence([1,2,2,3,2], 2));