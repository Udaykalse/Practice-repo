let arr = [1, 1, 2, 1];
let target = 1,
  count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == target) count++;
}
console.log(count)
