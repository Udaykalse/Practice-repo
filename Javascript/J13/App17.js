const getString = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") result.push(arr[i]);
  }
  return result;
};

console.log(getString([1, "Parvej", true, "Sanmati"]));
