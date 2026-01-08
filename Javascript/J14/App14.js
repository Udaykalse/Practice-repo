const nested = [1, 2, 3, 4, [5, 6, [7, 8, [9, [0]]]]];

function flatArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flatArray(nested))
