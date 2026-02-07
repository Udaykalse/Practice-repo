const str1 = "listen";
const str2 = "silent";

const isAnagram = str1.split('').sort().join('') === str2.split('').sort().join('');

console.log("Anagram:", isAnagram); // Output: true