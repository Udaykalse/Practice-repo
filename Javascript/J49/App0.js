let str = "Udaysinh";
let v = "aeiou";
let c = 0;
for (let i = 0; i < str.length; i++) {
  let ch = str[i].toLowerCase();
  if (v.includes(ch)) {
    c++;
  }
}

console.log(c)