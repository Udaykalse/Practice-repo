let str = "aabb";
let obj = {};
for (let ch of str) {
  obj[ch] = obj[ch] ? obj[ch] + 1 : 1;
}

console.log(obj)
