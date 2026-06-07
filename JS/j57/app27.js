function Nums(...num) {
  let numbers = [];
  for (let i = 0; i < num.length; i++) {
    if (typeof num[i] === "number") {
      numbers.push(num[i]);
    }
  }
  return numbers;
}

console.log(Nums(1, "abc", 2, undefined, 3, null));
