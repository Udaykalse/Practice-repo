function countVowels(str) {
  let count = 0;
  let vowels = "AEIOUaeiou";
  for (let ch of str) {
    if (vowels.includes(ch)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Parvej sidharth aman"));
