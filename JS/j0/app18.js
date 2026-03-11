let arr = [1, 2, 3, 4, 5];
let result = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    result.push(arr[i]);
  }
}

console.log(result)