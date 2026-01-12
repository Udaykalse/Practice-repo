function revString(str) {
  let outPut = "";
  for (let i = str.length - 1; i >= 0; i--) {
    outPut += str[i];
  }
  return outPut
}

console.log(revString('Parvej'))