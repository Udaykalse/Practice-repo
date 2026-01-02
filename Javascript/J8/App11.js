let arr = [1, 2, 3, 4];

let k = 5;
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = i; j < arr.length; j++) {
    sum += arr[j];
    if (sum === k) {
      console.log(arr.slice(i, j + 1));
    }
  }
}
