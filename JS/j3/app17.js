const arr = [1, 2, 3, 4, 5, 4, 3, 21, 1];
const unique = arr.filter((val, idx) => {
  return arr.indexOf(val) === idx;
});

console.log(unique)