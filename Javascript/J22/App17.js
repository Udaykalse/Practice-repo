let arr = [1, [2, 3], [4, 5]];

let result = [];

function flatArr(a) {
  for (let i of a) {
    if (Array.isArray(i)) {
      flatArr(i);
    } else {
      result.push(i);
    }
  }
}
flatArr(arr);
console.log(result);
