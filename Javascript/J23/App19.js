let str = "123";
let num = 0;
for (let ch of str) {
  num = num * 10 + (ch - "0");
}
console.log(num)