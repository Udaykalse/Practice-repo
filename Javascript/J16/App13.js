function finMin(arr) {
  let min = arr[0];
  for (let num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

console.log(finMin([5, 1, 2, 6]));
