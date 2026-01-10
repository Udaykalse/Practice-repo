let arr = [10, "20", 5, true, null, 40];

const max = Math.max(...arr.filter(Number.isFinite));

console.log(max)
