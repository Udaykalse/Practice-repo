function seLar(arr) {
  arr = [...new Set(arr)].sort((a, b) => b - a);
  return arr[1];
}

console.log(seLar([908, 9, 1, 2, 3]));
