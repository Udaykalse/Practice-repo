function count_Occurrences(arr, target) {
  let count = 0;
  for (let itM of arr) {
    if (itM === target) {
      count++;
    }
  }
  return count;
}

console.log(count_Occurrences([1, 2, 2, 4,4], 4));
