function subarraySum(arr, sum) {
  let curr = 0,
    map = new Map();
  for (let i = 0; i < arr.length; i++) {
    curr += arr[i];
    if (curr === sum) return [0, i];
    if (map.has(curr - sum)) return [map.get(curr - sum) + 1, i];
    map.set(curr, i);
  }
  return [];
}
console.log(subarraySum([1, 4, 20, 3, 10, 5], 33));
