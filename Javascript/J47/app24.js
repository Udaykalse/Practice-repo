function countChar(arr, val) {
  let c = 0;
  for (let num of arr) {
    if (num === val) {
      c++;
    }
  }
  return c;
}

console.log(countChar([1, 2, 3, 4, 5, 3, 4, 3, 2, 1, 23,3], 3));
