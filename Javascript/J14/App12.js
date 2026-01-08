const arr = [1, "2", "Apple", 10, true];
const total = arr
  .filter((itM) => typeof itM === "number")
  .reduce((a, b) => a + b, 0);

  console.log(total)
