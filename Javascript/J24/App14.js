let arr = [1, 2, "a", null, 3, 4];

let nums = [];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    nums.push(arr[i]);
  }
}

console.log(nums)