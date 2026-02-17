let arr = [1, 2, [3, 4], 5, [6]];
let flat = [];
for (let x of arr) {
  if (Array.isArray(x)) {
    for (let y of x) flat.push(y);
  } else {
    flat.push(x);
  }
}

console.log(flat)
console.log(arr.flat())
