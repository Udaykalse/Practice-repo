let arr = [10, "20", 5, true, null, 40];

let nums = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    nums.push(arr[i]);
  }
}


console.log(nums);
