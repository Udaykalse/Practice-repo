function getS(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return {
    to: sum,
    avg: sum / arr.length,
  };
}
console.log(getS([10,20,30]))
