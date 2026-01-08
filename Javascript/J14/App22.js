function duplicate(arr) {
  let uniArr = [];
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      uniArr.push(arr[i]);
      seen[arr[i]] = true;
    }
  }
  return uniArr;
}

console.log(duplicate([1,2,3,2,1]))
