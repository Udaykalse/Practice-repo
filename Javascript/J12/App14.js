const arr = [1, 2, 4, 3, 5];
let e = 0,
  o = 0;

for (let i of arr) {
  if (i % 2 === 0) {
    e++;
  } else {
    o++;
  }
}

console.log(`Even :- ${e} | Odd :- ${o}`);
