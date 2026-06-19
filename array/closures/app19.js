function outer() {
  let x = 20;
  function inner() {
    console.log(x);
  }
  return inner;
}
const fn1 = outer()
const fn2 = outer()

fn1()
fn2()