var arr1 = [10, 20];
var arr = [30, 40];

var result = [...arr1, ...arr];

for (var i = 0; i < result.length; i++) {
  console.log(result[i]);
}
