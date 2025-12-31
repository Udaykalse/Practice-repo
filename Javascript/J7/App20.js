function rearrange(arr) {
  let pos = arr.filter((x) => x >= 0);
  let neg = arr.filter((x) => x < 0);
  let result = [];
  let i = 0;
  while (pos[i] || neg[i]) {
    if (pos[i]) result.push(pos[i]);
    if (neg[i]) result.push(neg[i]);
    i++;
  }
  return result;
}
console.log(rearrange([1, 2, -3, -1, -2, 4]));
