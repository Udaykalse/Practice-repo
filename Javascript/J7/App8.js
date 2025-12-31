function findMinMax(arr) {
  return { max: Math.max(...arr), min: Math.min(...arr) };
}

console.log(findMinMax([10, 4, 55, 2]));
