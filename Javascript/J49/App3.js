let str = "hello";
let upper = "";
let lower = "";
for (let ch of str) {
  let code = ch.charCodeAt(0);
  if (code >= 97 && code <= 122) upper += String.fromCharCode(code - 32);
  else upper += ch;
  if (code >= 65 && code <= 90) lower += String.fromCharCode(code - 32);
  else lower += ch;
}

console.log("Upper :- ", upper);
console.log("Lower :- ", lower);
