function secondNum(arr) {
  let max = -Infinity;
  let second = -Infinity;
  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num !== max) {
      second = num;
    }
  }
  return second;
}

console.log(secondNum([1, 2, 3, 490]));
