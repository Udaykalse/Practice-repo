function sumA(arr) {
  let sumNums = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumNums.push(arr[i]);
    }
  }
  return sumNums;
}

console.log(sumA([1, 2, 3, 4, 5, 6]))