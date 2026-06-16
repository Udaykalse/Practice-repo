let Input = [12, 45, 7, 89, 23];
let max = -Infinity;
function maxNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxNum(Input));
