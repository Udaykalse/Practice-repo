const arr = [1, 2, 3, 7, 4, 5, 9];
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
    arr[i] = secondMax;
  }
}

console.log(secondMax);
