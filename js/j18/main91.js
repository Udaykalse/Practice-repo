function add(...a) {
  // Filter only numbers
  const nums = a.filter(x => typeof x === "number" && !isNaN(x));

  const total = nums.reduce((x, y) => {
    console.log(x, y);
    return x + y;
  }, 0);

  return total;
}

console.log(add(1, 2, null, 3, "1")); 
