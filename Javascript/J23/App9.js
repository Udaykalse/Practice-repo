let a = 0;
let b = 1;
for (let i = 0; i < 5; i++) {
  console.log(a);
  let t = a + b;
  a = b;
  b = t;
}
