let arr = [10, "20", 5, true, null, 40];

let nums = arr.filter((item) => typeof item === "number");
let num = [];
for (let i = 0; i < nums.length; i++) {
  num.push(nums[i]);
}
console.log(num);
