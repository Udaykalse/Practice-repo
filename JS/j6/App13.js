function meregeArr(a, b) {
  let res = [];
  for (let c of a) res.push(c);
  for (let c of b) res.push(c);
  return res;
}

console.log(meregeArr([1, 2], [3, 4]));
