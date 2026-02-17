let nums = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let unique = [];
for (let i = 0; i < nums.length; i++) {
  if (unique.indexOf(nums[i]) === -1) {
    unique.push(nums[i]);
  }
}

console.log(unique);
