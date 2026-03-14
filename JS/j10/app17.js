let arr = [1, 2, 3, 4, 5, 6, 7, 8, 90];
let even = [];
for (let n of arr) {
  if (n % 2 === 0) {
    even.push(n);
  }
}
console.log(even)