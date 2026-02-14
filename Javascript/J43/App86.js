let str = "javascript";
let count = 0;
let vowels = "aeiou";

for (let ch of str) {
  if (vowels.includes(ch)) count++;
}
console.log(count)
