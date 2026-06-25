let arr = [1, "k", 3, null];
function numbers(arr) {
  let nums = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      nums.push(arr[i]);
    }
  }
  return nums;
}
console.log(numbers(arr));
