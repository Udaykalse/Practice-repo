let arr = ["a", "b", "c", "a", "b"];
let unique = [];
for (let i = 0; i < arr.length; i++) {
  if (unique.indexOf(arr[i]) === -1) {
    unique.push(arr[i]);
  }
}

console.log(unique)