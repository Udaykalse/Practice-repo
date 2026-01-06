const countBools = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "boolean") count++;
  }
  return count;
};

console.log(countBools([true, null, 1, "Siddharth", false]));
