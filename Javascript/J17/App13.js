function sameChar(a, b) {
  return new Set(a).size === new Set(b).size;
}

console.log(sameChar("abc", "cab"));
console.log(sameChar("abc", "abcd"));
