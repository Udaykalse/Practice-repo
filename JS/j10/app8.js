let str = "Error Success Error Waring";
let obj = {};
str.split(" ").forEach((w) => {
  obj[w] = (obj[w] || 0) + 1;
});

console.log(obj);
