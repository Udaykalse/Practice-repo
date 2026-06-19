function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add1 = makeAdder(5);
const add2 = makeAdder(15);
console.log(add1(2));
console.log(add2(2));
