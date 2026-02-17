let str = "Udaysinh";
let rev = str.split("").reverse().join("");
let rev1 = "";

for (let i = str.length - 1; i >= 0; i--) {
  rev1 += str[i];
}

console.log(rev);
console.log(rev1);
