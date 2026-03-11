let nums = 1234,
  count = 0;

while (nums > 0) {
  count++;
  nums = parseInt(nums / 10);
}
console.log(count);
