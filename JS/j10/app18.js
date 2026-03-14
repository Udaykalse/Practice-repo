let arr = [1, 2, 3, 2, 4, 1, 4];

let seen = {},
  dup = [];

for (let n of arr) {
  if (seen[n]) dup.push(n);
  else seen[n] = true;
}

console.log(dup);
