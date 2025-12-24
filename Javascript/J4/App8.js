function countChar(...chars) {
  var count = 0;
  for (var i = 0; i < chars.length; i++) {
    if (chars[i] !== "") count++;
  }
  return count;
}

console.log(countChar("a", "b", "", "c", "", "p"));
