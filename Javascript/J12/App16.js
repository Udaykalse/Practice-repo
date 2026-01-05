const arr = [10, 45, 23, 89, 12];
let min = arr[0];

for (let i = arr.length; i > 0; i--) {
  if (arr[i] < min) min = arr[i];
}

console.log(min)