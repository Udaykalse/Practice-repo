let arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [0]]]]];

const res = arr.flat(Infinity)
console.log(res)