let str = "Parvej S , Sidharth K, Aman C, Chetan M, ";
let vo = "aeiouAEIOU";
let c = 0;
for (let i = 0; i < str.length; i++) {
  if (vo.includes(str[i])) c++;
}
console.log(c);
