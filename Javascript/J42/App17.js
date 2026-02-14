let arr = [5, 2, 9, 1, 6, 2, 9, 5];

arr.sort((a, b) => a - b);

let unique = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== arr[i - 1]) {
    unique.push(arr[i]);
  }
}

console.log(unique)