let arr = [1, 2, 3, 4, 5, 6, 5, 3, 2, 14, 2, 1, 3];

let un = [];
for (let i = 0; i < arr.length; i++) {
  if (!un.includes(arr[i])) {
    un.push(arr[i]);
  }
}

console.log(un)