let str = "00000001111111";
let i = 0,
  r = str.length - 1,
  ans = -1;
while (i <= r) {
  var mid = Math.floor((i + r) / 2); // 6
  if (str[mid] == "1") {
    ans = mid;
    r = mid - 1;
  } else {
    i = mid + 1;
  }
}

console.log(ans);
