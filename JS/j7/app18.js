const nums = [1, 2, 3, 2, 1, 23, 45, 6, 0];
const count = nums.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
},{});

console.log(count)
