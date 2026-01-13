let obj = { p: 1, s: 2, a: 3 };

let arr = [];

for (let key in obj) {
  arr.push(obj[key]);
}
console.log(arr);
