let arr = [1, "A", null, "ABC", 2, undefined, 0];
let nums = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    nums.push(arr[i]);
  }
}

console.log(nums)