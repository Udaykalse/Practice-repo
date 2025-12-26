var nums = [1, 2, 3, "c", 4, 5, 67, "b", 6, 7, 8, 9, 0, "a"];

var even = [];

for (var i = 0; i < nums.length; i++) {
    
  if (Number(nums[i])) {
    even.push(nums[i]);
  }
}

console.log(even);
