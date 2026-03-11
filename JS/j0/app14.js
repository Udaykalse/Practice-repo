let arr = [1, 98, 67, 8, 9, 9, 0, 75, 8, 6, 6, 5, 4, 3, 2, 0, 1];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    count++;
  }
}

console.log(count)