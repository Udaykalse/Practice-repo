let arr = [1, 2, 3, 1, 2, 4, 5, 3];

// let unique = [...new Set(arr)];
let unique = []
for (let i = 0; i < arr.length; i++) {
  if (unique.indexOf(arr[i]) === -1) {
    unique.push(arr[i]);
  }
}

console.log(unique);
