function findMax(...nums) {
  var max = nums[0];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max
}

console.log(findMax(1, 2, 3));
