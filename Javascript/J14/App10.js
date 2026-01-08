function angram(str1, str2) {
  if (str1.length !== str1.length) return false;
  string1 = str1.split("").sort().join("");
  string2 = str2.split("").sort().join("");
  return string1 === string2;
}

console.log(angram("slient", "listen"));
