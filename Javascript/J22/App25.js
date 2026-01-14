let arr = [1, 2, [3, 4], 5, [6, [7, [8, [9, [0]]]]]];
let result = [];

function flattenArr(a) {
  for (let item of a) {
    if (Array.isArray(item)) {
      flattenArr(item);
    } else {
      result.push(item);
    }
  }
}

flattenArr(arr);
console.log(result);
