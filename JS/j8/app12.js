let strs = ["a", "b", "a", "c"];
let count = strs.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
console.log(count)
