let arr = [12, 45, 7, 89, 23, 0, 32, 55, 12];

let odd = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    odd.push(arr[i]);
  }
}

console.log(odd);
