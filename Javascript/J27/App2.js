let arr = ["a", 2, 1, "b", null];
// let char = "";

let num = [];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    num.push(arr[i]);
  }
}

console.log(num.reduce((a, b) => a + b, 0));
