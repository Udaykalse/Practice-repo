let arr = [9, 2, 7, 3];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) min = arr[i];
}

console.log(min)