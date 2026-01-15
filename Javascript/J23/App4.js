// let a = [1, 2, 3];
let a = [34, 5, 99, 65, 1000, 897, 3465, 1, 2, 3];

let s = true;

for (let i = 0; i < a.length - 1; i++) {
  if (a[i] > a[i + 1]) {
    s = false;
    break;
  }
}


console.log(s);
