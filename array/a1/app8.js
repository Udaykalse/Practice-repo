let arr = [12, 45, 7, 89, 23, 0, 32, , 55, 12];

let even = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    even.push(arr[i]);
  }
}

console.log(even);
