let arr = [10, 5, 99, 2];
let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}
console.log(max);

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) min = arr[i];
}
console.log(min);
