const sco = [80, 90, 100];
const t = sco.reduce((a, b) => a + b, 0);
const avg = t / sco.length;
console.log(avg)
