let arr = [10, 100, 2000, 100000];
let found = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2000) found = true;
}

console.log(found);
