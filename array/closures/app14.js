function testClosure() {
  let x = 0;
  return function () {
    x++;
    return x;
  };
}

const fn = testClosure();
console.log(fn());
console.log(fn());
const fn1 = testClosure();
console.log(fn1());
console.log(fn());
