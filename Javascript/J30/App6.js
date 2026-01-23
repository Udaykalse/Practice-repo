let arr = [1, "A", null, 0, 2, "ABC", undefined];
let nums = [];
for (let i = 0; i <= arr.length; i++) {
  if (typeof arr[i] === "number") {
    // nums.push(arr[i]);
    console.log(i, arr[i]);
  }
}
// console.log(nums);
