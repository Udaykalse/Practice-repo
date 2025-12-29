let arr = [1, 2, 3, 4, 5, 6];

let reverseArr = [];

for (var i = arr.length - 1; i >= 0; i--) {
  reverseArr += arr[i];
}
console.log(reverseArr);
