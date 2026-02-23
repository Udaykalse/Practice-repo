let arr = [1, 2, 3, 4, 5, 6, 5, 4, 3, 21, 1];
let rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
  if (!rev.includes(arr[i])) {
    rev.push(arr[i]);
  }
}
console.log(rev);
