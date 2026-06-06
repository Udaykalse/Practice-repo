function isPalindrome(str) {
  const reverseString = str.split("").reverse().join("");
  return str === reverseString;
}
console.log(isPalindrome("GFG"));
