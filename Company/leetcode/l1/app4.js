function removeNum(arr) {
  const res = arr.filter((num) => num !== 0);
  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i] = res[i];
  }
  return res.length;
}

console.log(removeNum([1, 0, 2, 0, 3]));
