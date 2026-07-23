let arr = [1, "1", 2, "g", null, 5, undefined, 9];
let nums = [];
for (let i = 0; i <= arr.length - 1; i++) {
  if (typeof arr[i] === "number") {
    nums.push(arr[i]);
  }
}
console.log(nums);
