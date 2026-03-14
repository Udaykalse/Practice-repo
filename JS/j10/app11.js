let str = "DevOps";
let result = "";
for (let c of str) {
  result += c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
}

console.log(result);
