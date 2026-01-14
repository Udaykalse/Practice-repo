function reverseString(str, indX) {
  if (indX < 0) return "";
  return str[indX] + reverseString(str, indX - 1);
}

console.log(reverseString("Hello", "hello".length - 1));
