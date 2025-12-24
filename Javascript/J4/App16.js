var obj = {
  a: 1,
  b: 2,
};

var str = "";
for (var key in obj) {
  str = str + key + " : " + obj[key] + " ";
}
console.log(str)
