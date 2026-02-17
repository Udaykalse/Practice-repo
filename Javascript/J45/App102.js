let str = "madam";
let i = 0,
  j = str.length - 1;

let isPali = true;
while (i < j) {
  if (str[i] !== str[j]) {
    isPali = false;
    break;
  }
  i++;
  j--;
}
console.log(isPali);
