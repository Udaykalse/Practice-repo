let arr = ["a", "b", "C", "d", "E"];
let rev = [];

for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i].toUpperCase() === arr[i]) {
    rev.push(arr[i]);
  }
}

console.log(rev);
