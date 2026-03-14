let arr = [0, 4, 67, 1, 0];
let max = -Infinity,
  secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
    secondMax = arr[i];
  }
}

console.log(secondMax);
