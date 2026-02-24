var minWindow = function (s, t) {
  if (!s || !t) return "";
  let map = {};
  for (let char of t) {
    map[char] = (map[char] || 0) + 1;
  }
  let left = 0,
    count = t.length;
  let minLen = Infinity,
    start = 0;
  for (let right = 0; right < s.length; right++) {
    if (map[s[right]]-- > 0) count--;
    while (count === 0) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
      }
      if (++map[s[left]] > 0) count++;
      left++;
    }
  }
  return minLen === Infinity ? "" : s.substring(start, start + minLen);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
