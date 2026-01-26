function revArray(arr) {
  let rev = [];
  for (let i = arr.length - 1; i > 0; i--) {
    rev.push(arr[i]);
  }
  return rev;
}

console.log(revArray([1, 2, 3, 4]));
