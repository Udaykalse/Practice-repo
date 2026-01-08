const str = "hello";
function char(Attr) {
  let re = {};
  for (let i = 0; i < Attr.length; i++) {
    let char = str[i];
    if (re[char] > 0) {
      re[char]++;
    } else {
      re[char];
    }
  }
  return re;
}
console.log(char(str));
