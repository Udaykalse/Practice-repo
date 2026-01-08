const nested = [1, 2, [3, 4, [5, [6, 7, 8]]]];
const flatArr = nested.flat(Infinity);
console.log(flatArr)
