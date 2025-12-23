var obj1 = { a: 1, b: 2 },
  obj2 = { c: 3 };

var result = {};

for (var key in obj1) {
  result[key] = obj1[key];
}

for (var key in obj2) {
  result[key] = obj2[key];
}

console.log(result);
