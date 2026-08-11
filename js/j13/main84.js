let arr = ["a", "b", "c", "a", "d", "b"];
let unique = [...new Set(arr)];

console.log(`1rd Option way to solve :- ${unique}`);

let unique_arr = arr.filter((itM, idX) => arr.indexOf(itM) === idX);

console.log(`2rd Option way to solve :- ${unique_arr}`);

let uniqueArr = arr.reduce((acc, cur) => {
  //   if (!acc.includes(cur)) acc.push(cur);
  if (!acc.includes(cur)) {
    acc.push(cur);
  }
  return acc;
}, []);

console.log(`3rd Option way to solve :- ${uniqueArr}`);
