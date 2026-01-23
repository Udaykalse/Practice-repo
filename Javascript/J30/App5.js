let arr = [1, 2, 2, 3, 1, 4, 3, 5];
let un = [];

for (let i = 0; i < arr.length; i++) {
  if (!un.includes(arr[i])) {
    un.push(arr[i]);
  }
}

console.log(un)