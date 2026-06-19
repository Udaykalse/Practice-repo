function outer() {
  let x = 1;
  function inner() {
    let y = 2;
    console.log(x);
    console.log(y);
  }
  return inner;
}
const fn = outer();
fn();
