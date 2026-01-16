let chars = ["a", "b", "c"];
// let chars = "abc";

// let rev = "";
let rev = [];

for (let i = chars.length - 1; i >= 0; i--) {
  //   rev += chars[i];
  rev.push(chars[i]);
}

console.log(rev);
