let str = "how are you so what this im ot work with this";
let first = str[0].toUpperCase();
let rest = "";
for (let i = 1; i < str.length; i++) {
  rest += str[i];
}

let result = first + rest;
console.log(result);
