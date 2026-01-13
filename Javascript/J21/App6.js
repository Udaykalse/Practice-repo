let o1 = { a: 1 };
let o2 = { b: 2 };

let merged = {}

for (let k in o1) merged[k] = o1[k]
for (let k in o2) merged[k] = o2[k]


console.log(merged)