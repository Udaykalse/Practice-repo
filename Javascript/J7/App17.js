function longestConsecutive(nums) {
  let set = new Set(nums);
  let longest = 0;
  for (let n of set) {
    if (!set.has(n - 1)) {
      let curr = n,
        c = 1;
      while (set.has(curr + 1)) {
        curr++;
        c++;
      }
      longest = Math.max(longest, c);
    }
  }
  return longest;
}
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
