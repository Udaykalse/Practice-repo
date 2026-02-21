function duplicates(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(duplicates([1, 1, 2, 1, 2, 1, 3, 2, 4, 3, 5, 6, 5, 4, 3, 4, 5, 6]));
