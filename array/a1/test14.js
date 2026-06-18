let arr = [1, 2, 3, 2, 4, 1];

let result = [];
for (let i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i] !== i)) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
}

console.log(result);
