const is_Anagram_String = (a, b) =>
  a.split("").sort().join("") === b.split("").sort().join("");

console.log(is_Anagram_String("listen", "silent"));
