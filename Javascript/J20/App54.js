let arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [0]]]]];

function flatArr(data) {
  let res = [];
  data.forEach((itM) => {
    if (Array.isArray(itM)) {
      res.push(...flatArr(itM));
    } else {
      res.push(itM);
    }
  });
  return res
}

console.log(flatArr(arr));
