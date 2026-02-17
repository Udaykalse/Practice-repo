let char = ["A", "B", "A", "C", "D", "B"];
let uniqueChar = [];
for (let i = 0; i < char.length; i++) {
  if (!uniqueChar.includes(char[i])) {
    uniqueChar.push(char[i]);
  }
}
console.log(uniqueChar);
