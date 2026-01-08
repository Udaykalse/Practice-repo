function removeDuplicate(arr) {
  let unique = [];
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      unique.push(arr[i]);
      seen[arr[i]] = true;
    }
  }
  return unique


}

console.log(removeDuplicate([1,2,3,4,3,2,1]))
