function isAnagram(a, b) {
  if (a.length !== b.length) return false;

  let map = {};
  for (let ch of a) {
    map[ch] = (map[ch] || 0) + 1;
  }
  for (let ch of b) {
    if (!map[ch]) return false;
    map[ch]--;
  }
  return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("xyz", "abc"));

