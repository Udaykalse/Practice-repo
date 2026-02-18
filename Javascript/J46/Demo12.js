let arr = [10, 50, 20, 90, 40];
function findMax(a) {
  let i = 0,
    max = a[0];
  while (i < a.length) {
    if (a[i] > max) max = a[i];
    i++;
  }
  return max;
}
console.log(findMax(arr));
