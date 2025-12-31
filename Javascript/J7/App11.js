function findPairs(arr, sum) {
  let set = new Set();
  let result = [];
  for (let n of arr) {
    if (set.has(sum - n)) result.push([n, sum - n]);
    set.add(n);
  }
  return result;
}

console.log(findPairs([1, 5, 7, -1, 5], 6));
