const str = "hello";
const c = str.split("").reduce((acc, ch) => {
  acc[ch] = (acc[ch] || 0) + 1;
  return acc;
}, {});
console.log(c)