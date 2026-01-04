const buget = { hr: 500, it: 1000, sales: 800 };
const val = Object.values(buget);
const total = val.reduce((a, b) => a + b, 0);
console.log(val)
console.log(total);
