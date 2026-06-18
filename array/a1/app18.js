let arr = [12, 45, 7, 89, 23];

function totalOfArrEle(arr) {
  let sumOfEle = arr.reduce((a, b) => a + b, 0);
  return sumOfEle;
}

console.log(totalOfArrEle(arr));
