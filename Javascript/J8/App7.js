let arr = [1, 2, 3, 4];

let filterArr = arr.filter((x) => {
  return x % 2 === 0;
}, arr);

console.log(filterArr)
