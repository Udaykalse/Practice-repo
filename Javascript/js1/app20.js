const str = "javascript";
let count = 0;

for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  if (
    ch === "a" ||
    ch === "e" ||
    ch === "i" ||
    ch === "o" ||
    ch === "u" ||
    ch === "A" ||
    ch === "E" ||
    ch === "I" ||
    ch === "O" ||
    ch === "U"
  ) {
    count ++;
  }
}

console.log(count);
