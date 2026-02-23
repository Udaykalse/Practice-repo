let str = "javascript";
let vow = "aeiou";
let c = 0;
for (let i = 0; i < str.length; i++) {
  let ch = str[i].toLowerCase();
  if (ch >= "a" && ch <= "z" && !vow.includes(ch)) {
    c++;
  }
}

console.log(c)