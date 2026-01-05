const arr = [1, 2, 3, 4, 5, 3, 2, 1, 4];
let un = [];
for (let i of arr) {
  if (!un.includes(i)) un.push(i);
}
console.log(un)