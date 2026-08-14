function secondLargestSort(arr) {
  const sortedValue = [...arr].sort((a, b) => b - a);
  return sortedValue[1];
}
console.log(secondLargestSort([10, 5, 8, 20, 3]));
