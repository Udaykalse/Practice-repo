let obj = { a: 1, b: 2, c: 3 };
let arr = [];
for (let key in obj) {
  arr.push(obj[key]);
}
console.log(arr);
