let nums = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let unique = [];
let unique1 = [];
let unique2 = [...new Set(nums)];
for (i = 0; i < nums.length; i++) {
  if (!unique1.includes(nums[i])) {
    unique1.push(nums[i]);
  }
}

for (let i = 0; i < nums.length; i++) {
  if (unique.indexOf(nums[i]) === -1) {
    unique.push(nums[i]);
  }
}

console.log("--------------------------------");
console.log(unique);

console.log("--------------------------------");
console.log(unique1);

console.log("--------------------------------");
console.log(unique2);
