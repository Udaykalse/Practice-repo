const arr = [1, 2, 3, 4, 5];
let target = 3;
let found = false;

for (let i of arr) {
  if (i === target) {
    found = true;
    break;
  }
}

console.log(found);
