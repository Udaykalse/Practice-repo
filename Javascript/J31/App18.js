let arr = [1, 2, 3, 4, 3, 2, 1];
let u = [];
for (let i = 0; i < arr.length; i++) {
  if (!u.includes(arr[i])) {
    u.push(arr[i]);
  }
}

console.log(u)