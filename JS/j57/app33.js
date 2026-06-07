function removeFalsyVal(arr) {
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      ans[ans.length] = arr[i];
    }
  }
  return ans;
}

console.log(removeFalsyVal([0, 5, false, 6, "", 7]));
