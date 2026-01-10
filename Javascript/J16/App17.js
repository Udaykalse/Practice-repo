function second_Largest(arr) {
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

console.log(second_Largest([1, 2, 3, 4, 5, 6, 7]));
