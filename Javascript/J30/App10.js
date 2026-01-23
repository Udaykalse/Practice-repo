let arr = [1, 1, 2, 3, 4, 5, 2, 3, 4];
let revArr = [];

for (let i = 0; i < arr.length; i++) {
  if (!revArr.includes(arr[i])) {
    revArr.push(arr[i]);
  }
}

console.log(revArr)