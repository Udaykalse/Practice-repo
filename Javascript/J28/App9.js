let str = "udaysinh kalse";
let revString = "";
for (let i = 0; i < str.length; i++) {
  if (i == 0 || str[i - 1] === " ") {
    revString += str[i].toUpperCase();
  } else {
    revString += str[i];
  }
}

console.log(revString);
