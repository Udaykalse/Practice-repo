var str = "abc";

var arr = [...str];
var rev = "";

for (var i = arr.length - 1; i >= 0; i--) {
  rev = rev + arr[i];
}

console.log(rev)
