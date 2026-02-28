function reverseString(...s) {
  let reversed = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (typeof s[i] === "number") {
      reversed += s[i];
    }
  }
  return reversed;
}

console.log(reverseString(null, 1, 2, "a", 3, 4, undefined, 5, "0"));
