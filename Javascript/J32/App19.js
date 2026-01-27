let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let l = -Infinity;
let s = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > l) {
    s = l;
    l = arr[i];
  } else if (arr[i] > s && arr[i] !== l) {
    s = arr[i];
  }
}

console.log(s)