function intersection(a, b) {
  return a.filter((x) => b.includes(x));
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
