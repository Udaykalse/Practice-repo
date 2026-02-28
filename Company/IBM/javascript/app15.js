function isNumPalindrome(num) {
  let n = Math.abs(num).toString();
  return n === n.split("").reverse().join("");
}

console.log(isNumPalindrome(121));
