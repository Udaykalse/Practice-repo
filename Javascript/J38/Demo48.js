const num = 5678;
let sum = num
  .toString()
  .split("")
  .reduce((a, b) => a + parseInt(b), 0);

console.log(sum)
