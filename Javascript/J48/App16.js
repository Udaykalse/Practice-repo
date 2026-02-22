function twoSum(nums, tar) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const comp = tar - nums[i];
    if (map[comp] !== undefined) return [map[comp], i];
    map[nums[i]] = i;
  }
}

console.log(twoSum([2,7,11,15], 9))