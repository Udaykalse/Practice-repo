let str = "abbcdd";
let obj = {};
for (let c of str) {
  obj[c] = (obj[c] || 0) + 1;
}
console.log(obj)
