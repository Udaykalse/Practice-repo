function findFirstEven(arr) {
  const firstEvenNumber = arr.find(function (num) {
    if (num % 2 == 0) {
      return num;
    }
  });
  return firstEvenNumber;
}

console.log(findFirstEven([5, 7, 9, 10, 13]));