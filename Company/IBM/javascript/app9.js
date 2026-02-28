function largestElement(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

let arr = [3, 5, 1, 9, 2];
console.log(arr ," :- ", largestElement(arr));
