function countChar(arr, val) {
  return arr.filter((num) => num === val).length;
}

console.log(countChar([1, 2, 3, 4, 5, 3, 4, 3, 2, 1, 23, 3], 3));
