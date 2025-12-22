var arr = [1, 2, 3];
var allPositive = true;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] <= 0) allPositive = false;
}
console.log(allPositive)
