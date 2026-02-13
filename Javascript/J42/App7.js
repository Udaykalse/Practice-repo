let arr = [2, 4, 5, 61, 1, 0];
for (let i = 0; i < arr.length; i++) {
  let minIdX = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minIdX]) {
      minIdX = j;
    }
  }

  let temp = arr[i];
  arr[i] = arr[minIdX];
  arr[minIdX] = temp;
}

console.log(arr)