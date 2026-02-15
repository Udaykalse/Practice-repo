let str = "madam";
let isPal = true;
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPal = false;
    break;
  }
}

console.log(isPal)