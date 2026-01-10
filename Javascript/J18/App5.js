function mereAndUnique(a, b) {
  var merged = a.concat(b);
  const mergedArray = merged.filter(function (itM, idX) {
    return merged.indexOf(itM) === idX;
  });
  return mergedArray;
}

console.log(mereAndUnique([1,2,3], [2,3,4]));