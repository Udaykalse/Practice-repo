function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num < max) max = num;
  }
  return max;
}
const max = (arr) => Math.max(...arr);
console.log(findMax([1,2,3,4]))
