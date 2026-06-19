function test() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  x = 20;
  return inner;
}
const fn = test();
fn();
