let arr = [1, 2, "b", null, 3, undefined, 4, 5];

let nums = [];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    nums.push(arr[i]);
  }
}

console.log(nums)