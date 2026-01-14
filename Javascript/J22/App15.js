let arr = [1, [2, 3], [4, 5]];

let result = arr.reduce((a, c) => {
  return a.concat(c);
}, []);

console.log(result)
