function removezero(nums) {
  let k = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] !== 0) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

console.log(removezero([1, 0, 2, 0, 3]));
