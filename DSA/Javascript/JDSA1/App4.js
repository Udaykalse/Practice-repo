let nums = [2, 11, 7, 15];
let target = 9;

let map = {};

for (let i = 0; i < nums.length; i++) {
  let diff = target - nums[i];
  if (map[diff] !== undefined) {
    console.log([map[diff], i]);
  }
  map[nums[i]] = i;
}
