var str = "ab";
var res = "";
for (var i = 0; i < str.length; i++) {
  res = res + str[i] + str[i];
}

console.log(res)