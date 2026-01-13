let arr = [1, 2, 2, 2, 3, 2, 1, 3, 2, 1, 4, 5, 4, 3, 2, 2];

let len = arr.length;

let u = [];

for (let i = 0; i < arr.length; i++) {
  if (u.indexOf(arr[i]) === -1) {
    u.push(arr[i]);
  }
}
console.log(len);
console.log(u);
