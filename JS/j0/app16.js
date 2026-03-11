let arr = [0, 99, 1, 4, 2];
let first = -Infinity,
  second = -Infinity;

for (let n of arr) {
  if (n > first) {
    second = first;
    first = n;
  } else if (n > second && n !== first) {
    second = n;
  }
}

console.log(second)