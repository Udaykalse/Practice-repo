var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var arr2 = [11, 2, 3, 12, 13, 4, 14, 15];

var oneArray = new Set([...arr, ...arr2]);
var arr1 = [...oneArray];
var uniqueArr = [];

for (var i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 !== 0) {
    console.log(arr1[i]);
    uniqueArr.push(arr1[i]);
  }
}

console.log(uniqueArr);
