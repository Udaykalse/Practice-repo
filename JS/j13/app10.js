let arr = [0, 4, 7, 1, 8, 3];
let max = -Infinity,
  secondMax = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
    secondMax = arr[i];
  }
}
console.log(secondMax);
