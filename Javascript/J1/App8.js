let arr = [1, 2, 2, 3, 4, 4];

let u_Arr = [];

for (let i = 0; i < arr.length; i++) {
  if (!u_Arr.includes(arr[i])) {
    u_Arr.push(arr[i]);
  }
}

console.log(u_Arr);
