let arr = [2, 4, 6];

arr.forEach((val, idX, arr) => {
  arr[idX] = val * 2;
});

console.log(arr);
