function kadane(arr) {
  let max = arr[0],
    curr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    curr = Math.max(arr[i], curr + arr[i]);
    max = Math.max(max, curr);
  }
  return max;
}

console.log(kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
