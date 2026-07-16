const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = arr.filter((value, idX) => {
  return arr.indexOf(value) === idX;
});

console.log(unique);
