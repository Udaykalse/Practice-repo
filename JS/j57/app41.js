function arrayUnion(a1, a2) {
  return [...new Set([...a1, ...a2])];
}

console.log(arrayUnion([1, 2, 3], [2, 3, 4]));
