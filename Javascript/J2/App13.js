var str = "abc";
var rev = "";
for (var i = str.length - 1; i >= 0; i--) {
  rev = rev + str[i];
}

console.log(rev);
