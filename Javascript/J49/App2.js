let str = "hello world javascript";
let count = 0;
let inWord = false;
for (let i = 0; i < str.length; i++) {
  if (str[i] !== " " && !inWord) {
    count++;
    inWord = true;
  } else if (str[i] === " ") {
    inWord = false;
  }
}
console.log(count);
