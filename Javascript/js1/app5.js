let num = 1234;
const sum = num
  .toString()
  .split("")
  .reduce((a, b) => a + Number(b), 0);
console.log(sum)
