var str = "a b c";
var res = "";
for (var i = 0; i < str.length; i++) {
  if (str[i] !== " ") res = res + str[i];
}
console.log(res)
