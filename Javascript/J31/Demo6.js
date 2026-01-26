let arr = [1, 2, 3, 4, 5];
let l = -1;
let s = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > l) {
    s = l;
    l = arr[i];
  } else if (arr[i] > s && arr[i] !== l) {
    s = arr[i];
  }
}

console.log(s)