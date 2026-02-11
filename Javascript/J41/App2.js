const arr = [1, 2, 3, 4];
const a1 = [5, 6, 7, 8];
const mereged = [];
for (let i = 0; i < arr.length; i++) {
  mereged.push(arr[i]);
}
for (let i = 0; i < a1.length; i++) {
  mereged.push(a1[i]);
}

console.log(mereged)