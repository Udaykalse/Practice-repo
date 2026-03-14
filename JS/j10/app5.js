let str = "hello world";
let result = str
  .split(" ")
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join(" ");

console.log(result);
