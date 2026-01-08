function sLar(ar) {
  const uniS = [...new Set(ar)].sort((a, b) => b - a);
  return uniS[1];
}

console.log(sLar([1, 2, 3, 45]));
