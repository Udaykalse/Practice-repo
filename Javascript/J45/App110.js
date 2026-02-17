let str = "javascript";
let vowels = "aeiou";
let count = 0;

for (let ch of str.toLowerCase()) {
  if (ch >= "a" && ch <= "z" && !vowels.includes(ch)) count++;
}
console.log(count);
