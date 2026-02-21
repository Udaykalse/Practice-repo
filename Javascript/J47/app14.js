function anagramStr(a, b) {
  if (a.length !== b.length) return false;
  let str1 = a.split("").sort().join("");
  let str2 = b.split("").sort().join("");
  return str1 === str2;
}
console.log(anagramStr("abcdf", "fadbc"));
