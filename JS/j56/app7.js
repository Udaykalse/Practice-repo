let num = 123;
let rev = "";
let str = num.toString();
// console.log(typeof str);
for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}
console.log(rev)
