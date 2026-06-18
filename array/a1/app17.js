let arr = [1, 5, 3, 2, 4, 90, 35];
let first = -Infinity;
let second = -Infinity;

for (let num of arr) {
  if (num > first) {
    second = first;
    first = num;
  } else if (num > second && num !== first) {
    second = num;
  }
}

console.log(second);
