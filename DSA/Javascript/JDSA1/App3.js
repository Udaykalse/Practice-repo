let nums = [2, 11, 7, 15];
let target = 9;

nums.forEach((num, i) => {
  for (let j = i + 1; j < nums.length; j++) {
    if ((num + nums[j] === target)) {
      console.log([i, j]);
    }
  }
});
