const arr = [10, 20, 30, 40];

let f = -Infinity,
  s = -Infinity;

for (let i of arr) {
  if (i > f) {
    s = f;
    f = i;
  } else if (i > s && i !== f) {
    s = i;
  }
}

console.log(s);
