const str = "hello world javascript";
const res = str
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");

console.log(res)
