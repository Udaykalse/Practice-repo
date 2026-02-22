function flatten(arr) {
  return arr.flat(Infinity);
}

console.log(flatten([1, 2, [3, 4,[(5, [6, [7, [8, [0]]]])]]]));
