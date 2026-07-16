let str = "javascript";
const count = str
  .toLowerCase()
  .split("")
  .filter((ch) => "aeiou".includes(ch)).length;

  console.log(count)