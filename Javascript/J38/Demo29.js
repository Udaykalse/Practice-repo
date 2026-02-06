let arr = [0, 1, null, 2, undefined, "a", 8, "1"];
let num = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    num.push(arr[i]);
  }
}

console.log(num)