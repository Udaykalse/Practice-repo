let arr = [1, 2, 3, 4];
let sorted = true;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < arr[i - 1]) {
    sorted = false;
    break;
  }
}

console.log(sorted);
