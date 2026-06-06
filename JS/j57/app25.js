function arrayInterSection(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter((value) => set2.has(value));
}
console.log(arrayInterSection([1, 2, 3, 7], [3, 4, 5]));
