function anagramStr(a, b) {
  if (a.length !== b.length) return false;
  let count = {};
  for (let char of a) {
    count[char] = (count[char] || 0) + 1;
  }
  for (let char of b) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}
console.log(anagramStr("abcdf", "fadbc"));
