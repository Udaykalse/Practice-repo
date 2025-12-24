var Obj = {
  b: 2,
};

var isEmpty = true;

for (var key in Obj) {
  isEmpty = false;
}

console.log(isEmpty);
