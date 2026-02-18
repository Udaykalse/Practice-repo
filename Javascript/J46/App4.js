let arr = [10, 20, 50, 30, 90, 40];
let max = -Infinity;
let second = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    second = max;
    max = arr[i];
  } else if (arr[i] > second && arr[i] !== max) {
    second = arr[i];
  }
}

console.log(second);
