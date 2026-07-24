function keepEven(nums) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

console.log(keepEven([1, 2, 3, 45, 6]));
