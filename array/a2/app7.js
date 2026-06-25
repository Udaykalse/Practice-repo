function nums(arr) {
  let numbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numbers.push(arr[i]);
    }
  }

  return numbers;
}

console.log(nums([1, "k", 3, null]));