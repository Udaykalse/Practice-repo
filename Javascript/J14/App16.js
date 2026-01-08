const arr = [1, "2", "APple", 11, true];

function sumMixed(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum = sum + arr[i];
    }
  }
  return sum;
}

console.log(sumMixed(arr));
