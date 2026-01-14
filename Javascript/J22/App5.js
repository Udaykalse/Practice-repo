function reverseArray(arr) {
  if (arr.length === 0) return [];
  return [arr[arr.length - 1]].concat(reverseArray(arr.slice(0, -1)));
}

console.log(reverseArray([1, 2, 3, 4, 5]));
