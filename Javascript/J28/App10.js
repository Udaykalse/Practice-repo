let str = "udaysinh kalse rahnar murud dist. latur ";
let res = "";
for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] == " ") {
    res += str[i].toUpperCase();
  } else {
    res += str[i];
  }
}

console.log(res)