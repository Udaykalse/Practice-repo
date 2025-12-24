var str = "udaysinh";
// var revStr = str.split("").reverse().join("");
// console.log(revStr);/
var rev = "";
for (var i = str.length - 1; i >=0; i--) {
    rev += str[i];
  // rev.push(str[i])
//   rev = rev + rev.push(str[i]);
}

console.log(rev);
