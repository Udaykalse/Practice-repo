function convert(arr) {
  var fahr = [];
  for (var i = 0; i < arr.length; i++) {
    fahr.push((arr[i] * 9/5) + 32);
  }
  return fahr;
}

console.log(convert([0, 30]));
