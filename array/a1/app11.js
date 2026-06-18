let arr = [1, 2, 3, 2, 4, 1];

let duplicates = arr.filter((itM, idX) => arr.indexOf(itM) !== idX);

console.log([...new Set(duplicates)]);
