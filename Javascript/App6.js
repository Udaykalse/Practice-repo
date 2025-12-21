let str = "Hello World Udaysinh";

let c = 0;
let v = "aeiouAEIOU";

for (let i = 0; i < str.length; i++) {
  if (v.includes(str[i])) {
    c++;
  }
}

console.log(c);
