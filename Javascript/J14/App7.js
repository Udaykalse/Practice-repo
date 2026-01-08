function isPalindrom(str) {
  let reversed = str.split("").reverse().join('');
  return str === reversed;
}

console.log(isPalindrom("racecar"));
