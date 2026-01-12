function unique(arr) {
  var uArr = [];
  for (var i = 0; i< arr.length; i++) {
    if (uArr.indexOf(arr[i]) === -1) uArr.push(arr[i]);
  }
  return uArr;
}
console.log(unique([1, 2, 2, 3, 2, 4, 4, 5]));
