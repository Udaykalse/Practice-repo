function lengthOfLongSubStr(s) {
  let set = new Set(),
    left = 0,
    max = 0;
  for (let rigth = 0; rigth < s.length; rigth++) {
    while (set.has(s[rigth])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[rigth]);
    max = Math.max(max, rigth - left + 1);
  }
  return max;
}

console.log(lengthOfLongSubStr("abcabcbb"));
