function sLa(arr) {
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
  return s;
}

console.log(sLa([10, 9, 69, 6]));
