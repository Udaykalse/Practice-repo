let arr = [1, 2, 3, 4, 5];

let un = [...new Set(arr)].sort((a, b) => b - a);

let res = un[1];
console.log(res);
