let str = "hello world";
let upper = "";
for (let i = 0; i < str.length; i++) {
  let code = str.charCodeAt(i);
  if (code >= 97 && code <= 122) {
    upper += String.fromCharCode(code - 32);
  } else {
    upper += str[i];
  }
}

console.log(upper);
