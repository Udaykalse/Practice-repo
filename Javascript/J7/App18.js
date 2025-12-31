function zeroSum(arr) {
  let set = new Set();
  let sum = 0;
  for (let n of arr) {
    sum += n;
    if (sum === 0 || set.has(sum)) return true;
    set.add(sum);
  }

  return false;
}

console.log(zeroSum([4,2,-3,1,6]));