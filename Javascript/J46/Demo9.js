let arr = [1, "1", "abc", null, 2, 0.5, -1, undefined, 2];

function onlyNums(a) {
  let res = [];
  for (let x of a) {
    if (Number.isFinite(x)) {
      res.push(x);
    }
  }
  return res;
}

console.log(onlyNums(arr));
