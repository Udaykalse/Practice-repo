function unique(arr) {
  let newArr = (arr) => [...new Set(arr)];
  return newArr(arr);
}

console.log(unique([1, 2, 3, 4, 3, 2, 1]));
