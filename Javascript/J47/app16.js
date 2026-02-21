function duplicates(arr) {
  return [...new Set(arr)];
}

console.log(duplicates([1, 1, 2, 1, 2, 1, 3, 2, 4, 3, 5, 6, 5, 4, 3, 4, 5, 6]));
