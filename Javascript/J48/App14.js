function maxSubArrayLen(nums, k) {
  let map = new Map();
  let sum = 0;
  let maxLength = 0;
  map.set(0, -1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      let length = i - map.get(sum - k);
      maxLength = Math.max(maxLength, length);
    }
    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }
  return maxLength
}
console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3));
