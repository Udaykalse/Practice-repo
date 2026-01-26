let arr = [1, 2, 3, 4, 5, 4, 3, 21, 1, 2, 5];
let unique = [];
for (let i = 0; i < arr.length; i++) {
  if (!unique.includes(arr[i])) {
    unique.push(arr[i]);
  }
}

console.log(unique)