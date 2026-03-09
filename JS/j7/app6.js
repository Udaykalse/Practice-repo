const arr = [1, 3, "t", true, undefined, "abc", null];
const nums = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    nums.push(arr[i]);
  }
}

console.log(nums)