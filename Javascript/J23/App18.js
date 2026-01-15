let a = [1, 2, 3];
let b = [2, 3, 4];

for (let i of a) {
  if (b.includes(i)) console.log(i);
}
