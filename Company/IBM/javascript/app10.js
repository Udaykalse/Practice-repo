function isPalindrome(s) {
  let cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

let input = '"A man, a plan, a canal: Panama';
console.log(isPalindrome(input));
