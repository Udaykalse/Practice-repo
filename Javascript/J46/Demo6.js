let arr = [10, 50, 20, 90, 40];
console.log(Math.max(...arr));

let min = arr[0];
for (let x of arr) {
  if (x < min) min = x;
}
console.log(min)