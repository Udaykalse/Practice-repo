function unique(arr) {
  let result = [];
  for (let item of arr) {
    if (!result.includes(item)) result.push(item);
  }
  return result;
}

console.log(unique([1, 2, 3, 4, 3, 2, 1]));
