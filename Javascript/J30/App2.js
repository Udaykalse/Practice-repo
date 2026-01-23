let arr = [1, 2, 3, "A", null, undefined];
let nums = []
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    nums.push(arr[i]);
  }
}

console.log(nums)