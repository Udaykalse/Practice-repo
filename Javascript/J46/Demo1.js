let arr = [1, "1", -1, "abc", null, 0, 2, undefined, 0.5];
let onlyNums = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    onlyNums.push(arr[i]);
  }
}
console.log(onlyNums);
