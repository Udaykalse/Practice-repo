let n = 5,
  a = 0,
  b = 1;
for (let i = 0; i < n; i++) {
  console.log(a);
  let t = a + b;
  a = b;
  b = t;
}
