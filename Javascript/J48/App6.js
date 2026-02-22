function depulicates(arr) {
  return [...new Set(arr)];
}

console.log(depulicates([1, 2, 3, 2, 1]));
