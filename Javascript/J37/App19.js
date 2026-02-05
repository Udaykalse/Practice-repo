function findMax(arr) {
  let min = arr[0];
  for (let num of arr) {
    if (num > min) min = num;
  }
  return min;
}

console.log(findMax([10, 2, 44, 22]));
