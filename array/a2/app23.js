function nums(...itm) {
  let numbers = [];
  for (let i = 0; i < itm.length; i++) {
    if (typeof itm[i] === "number") {
      numbers.push(itm[i]);
    }
  }
  return numbers;
}

console.log(nums(1, "k", 3, null));
