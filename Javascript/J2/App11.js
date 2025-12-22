var str = "apple";
var res = "";

for (var i = 0; i < str.length; i++) {
  res += (str[i] === "p") ? "x" : str[i];
}

console.log(res)
