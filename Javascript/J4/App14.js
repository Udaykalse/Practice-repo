var Obj1 = { a: 1, b: 2 };
var Obj2 = { c: 3 };

var mereg = { ...Obj1, ...Obj2 };

for (var key in mereg) {
  console.log(key, mereg[key]);
}
