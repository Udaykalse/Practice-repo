let arr = [1, 2, [3, 4], 5, [6, [7, [8, [9, [0]]]]]];
let result = [];

function flattenArr(arr) {
  for (item of arr) {
    if (Array.isArray(item)) {
      flattenArr(item);
    } else {
      result.push(item);
    }
  }
}

flattenArr(arr);
console.log(result);
