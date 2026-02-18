let arr = [1, "1", -1, "abc", null, 0, 2, undefined, 0.5];
let onlyNums = arr.filter((x) => typeof x === "number");
console.log(onlyNums)
