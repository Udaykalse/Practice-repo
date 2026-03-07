function flatten(arr) {
  let result = [];
  function helper(a) {
    for (let x of a) {
      if (Array.isArray(x)) {
        helper(x);
      } else {
        result.push(x);
      }
    }
  }
  helper(arr);
  return result;
}
console.log(flatten([1, [2, [3, 4]], 5]));

console.log("===================flattenUsingFlat=====================");

function flattenUsingFlat(arr1) {
  return arr1.flat();
}

console.log(flattenUsingFlat([1, [2, 3], [4, 5]]));

console.log(
  "====================deepFlattenUsingFlat==================="
);

function deepFlattenUsingFlat(arr2) {
  return arr2.flat(Infinity);
}

console.log(deepFlattenUsingFlat([1, [2, [3, 4]], 5]));
