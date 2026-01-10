const countVowels = (str) =>
  [...str].reduce((c, ch) => ("aeiouAEIOU".includes(ch) ? c + 1 : c), 0);

console.log(countVowels('javascript'))
