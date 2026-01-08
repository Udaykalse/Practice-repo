function angram(str1, str2) {
  if (str1.length !== str1.length) return false;
  let counter = {};
  for (let char of str1) {
    counter[char] = (counter[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!counter[char]) return false;
  }
  return true;
}

console.log(angram("slient", "listen"));
