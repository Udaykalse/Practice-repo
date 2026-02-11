const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
const rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
  if (!rev.includes(arr[i])) {
    rev.push(arr[i]);
  }
}

console.log(rev);
