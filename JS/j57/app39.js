function countChar(str, char) {
  let str1 = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === char) {
      count++;
    }
  }
  return count;
}
console.log(countChar("AmanAmeySiddharthParvej", "a"));
