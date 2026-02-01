let arr = [3, 7, 9, 2];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) min = arr[i];
}
console.log(min);
