let str = "aabbcc";
let obj = [...str].reduce((a, c) => {
  a[c] = (a[c] || 0) + 1;
  return a;
}, {});
console.log(obj);
