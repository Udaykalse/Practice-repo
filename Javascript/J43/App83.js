let str = "javascript";
let count = 0;
let vowels = "aeiou";

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    count++;
  }
}

console.log(count)