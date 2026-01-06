let arr = ["0", 1, 2, 3, "a", "pavej"];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") sum += arr[i];
}

console.log(sum)