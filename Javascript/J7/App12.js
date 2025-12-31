function rotate(arr, k) {
  k %= arr.length;
  return [...arr.slice(-k), ...arr.slice(0, arr.lengt - k)];
}

console.log(rotate([1,2,3,4,5,6,7], 3));