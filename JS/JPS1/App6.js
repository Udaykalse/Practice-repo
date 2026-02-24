var duplicates = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      result.push(Math.abs(nums[i]));
    } else {
      nums[index] *= -1;
    }
  }
  return result;
};

console.log(duplicates([1,2,3,4,3,2,1]))