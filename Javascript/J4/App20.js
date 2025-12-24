var Obj = {
  x: 20,
  y: 10,
};

var values = [];

for (var key in Obj) {
  values.push(Obj[key]);
}

console.log(values)