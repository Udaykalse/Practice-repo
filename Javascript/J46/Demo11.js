let arr = [1, "1", "abc", null, 2, 0.5, -1, undefined, 2];
let nums = arr.filter(Number.isFinite);
console.log(nums)
