let arr = [2, 4, 5, 61, 1, 0];
let sorted = [];

while (arr.length > 0) {
  let min = arr[0];
  let minIdX = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIdX = i;
    }
  }
  sorted.push(min);
  arr.splice(minIdX, 1);
}

console.log(sorted)