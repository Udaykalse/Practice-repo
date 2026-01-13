var str = "aabb";

var res = "";
for (let i = 0; i < str.length; i++) {
  if (res.indexOf(str[i]) === -1) res += str[i];
}

console.log(res)