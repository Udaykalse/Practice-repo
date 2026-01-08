function sLar(arr) {
  let lar = -Infinity;
  let uniS = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > lar) {
      uniS = lar;
      lar = arr[i];
    } else if (arr[i] > uniS && arr[i] !== lar) {
      uniS = arr[i];
    }
  }
  return uniS;
}

console.log(sLar([1, 2, 3, 45]));
