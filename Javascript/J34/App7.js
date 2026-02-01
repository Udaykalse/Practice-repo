let arr = [0, 5, 2, 7, 9, 8];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}

console.log(max)