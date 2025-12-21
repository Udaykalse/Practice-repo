function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

console.log(isSorted([1, 2, 3]));
console.log(isSorted([3, 2, 1]));

const a = [1, 2, 3];
const b = [3, 4, 5];

const res = [...new Set([...a, ...b])];
console.log(res);
