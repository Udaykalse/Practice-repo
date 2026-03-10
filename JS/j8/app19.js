function isPalind(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalind("madam"));
