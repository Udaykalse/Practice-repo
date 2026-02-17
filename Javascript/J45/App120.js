let arr = [10, 90, 8, 5, 2];
let max = -Infinity;
let second = -Infinity;
for (let x of arr) {
  if (x > max) {
    second = max;
    max = x;
  } else if (x > second && x !== max) {
    second = x;
  }
}

console.log(second)