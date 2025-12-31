function mergeSorted(a, b) {
  return [...a, ...b].sort((x, y) => x - y);
}

console.log(mergeSorted([1, 3, 5], [2, 4, 6]));
