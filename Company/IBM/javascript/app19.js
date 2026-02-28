function countVowels(s) {
  return (s.match(/[aeiou]/gi) || []).length;
}

console.log(countVowels("udaysinh kalse"));
