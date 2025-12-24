var str = "hello";
var chars = [...str];
var result = "";

for (var i = 0; i < chars.length; i++) {
  result = result + chars[i];
}

console.log(result)