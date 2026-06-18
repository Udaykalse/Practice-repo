let arr = [-10, -5, -20];

let result = [...arr]
  .sort((a, b) => b - a)[1];

console.log(result);