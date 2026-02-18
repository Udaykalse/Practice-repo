let arr = [10, 50, 20, 90, 40];
console.log(arr.reduce((a, b) => a + b, 0));

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum)
