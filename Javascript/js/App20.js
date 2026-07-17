let arr = [1, 2, 3, 4];
var doubleArr = [];
// for (var i = 0; i <= arr.length - 1; i++) {
//   var double = arr.map((x) => arr[x] * 2);
//   doubleArr.push(double);
// }

function double(arr) {
  return arr.map((x) => x * 2);
}

console.log(double(arr));
