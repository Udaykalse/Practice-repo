var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var pushedArr = [];

for (var i = 0; i < arr.length; i++) {
  pushedArr.push(arr[i]);
}
arr.push(50);

// console.log(arr);
console.log("Original Array :- ", arr);
console.log("Copied Array :- ", pushedArr);
