function sumofOnlyNums(arr) {
  let sum = 0;
  for (let itM of arr) {
    if (typeof itM === "number") {
      sum += itM;
    }
  }
  return sum;
}


console.log(sumofOnlyNums(["a", 10, "3", 5, true, 20]));