function double(...nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] *= nums[i];
  }
  return nums;
}

console.log(double(1, 2, 3, 4));
