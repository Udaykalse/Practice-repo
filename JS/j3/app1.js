function onlyNums(...nums) {
  let numbers = [];
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "number") {
      numbers.push(nums[i]);
    }
  }
  return numbers;
}

console.log(onlyNums(1, "1", null, "abc", 2, undefined, 3));
