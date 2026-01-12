function revString(str) {
  let outPut = [];
  for (let i = str.length - 1; i >= 0; i--) {
    outPut.push(str[i]);
  }
  return outPut;
}

console.log(revString([1, 2, 3, 45, 6]));
