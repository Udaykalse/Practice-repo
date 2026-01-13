let str = "abc";
let arr = [...str];
let rev = "";
for (let i = arr.length - 1; i >= 0; i--) {
  rev = rev + arr[i];
}

console.log(rev)
