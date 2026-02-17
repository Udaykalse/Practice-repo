let str = "aabbccddefr";
let obj = {};
for (let ch of str) {
  if (obj[ch]) {
    obj[ch]++;
  } else {
    obj[ch] = 1;
  }
}

console.log(obj);
