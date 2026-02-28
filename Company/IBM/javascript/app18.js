let arr = [1, 102, 3, 99, 1000];

let max = -Infinity;
let secondMax = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax && arr !== max) {
    arr[i] = secondMax;
  }
}

console.log(secondMax);
