function aIntersection(a1, a2) {
  const set2 = new Set(a2);
  return a1.filter((val) => set2.has(val));
}

console.log(aIntersection([5, 6, 7], [6, 7, 8]));
