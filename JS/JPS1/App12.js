var containsDuplicates = function (nums) {
  return new Set(nums).size !== nums.length;
};

console.log(containsDuplicates([1, 2, 3, 1]));
