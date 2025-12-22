var arr = [-1, 2, 3, 4, -2, -0, -7, 6, 4];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] <= 0) arr[i] = 0;
}

console.log(arr)