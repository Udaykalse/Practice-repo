let arr = [1, 2, 3, 4, 3, 5, 2, 1, 6, 7];
let rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
  if (!rev.includes(arr[i])) {
    rev.push(arr[i]);
  }
}

console.log(rev);
