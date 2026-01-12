function countVowels(str) {
  const vowels = "aeiou";
  const strL = str.toLowerCase();
  return strL.split("").filter((c) => vowels.includes(c)).length;
}

console.log(countVowels("UdaysinH"));
