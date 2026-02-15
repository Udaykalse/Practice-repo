let a = { x: 10 };
let b = { y: 20 };

let merged = {};

for (let key in a) merged[key] = a[key];
for (let key in b) merged[key] = b[key];

console.log(merged);
