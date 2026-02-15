function isAnagram(str1, str2) {
  let str = str1.split("").sort().join("");
  let revstr = str2.split("").sort().join("");
  return str === revstr;
}
console.log(isAnagram("listen", "silent")); 
