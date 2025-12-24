var Obj1 = { a: 1, b: 2 };
var Obj2 = { c: 3 };

var result = {};

for (var key in Obj1) {
  result[key] = Obj1[key];
}

for (var key in Obj2) {
  result[key] = Obj2[key];
}

console.log(result)