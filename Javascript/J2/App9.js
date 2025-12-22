var str = "Javascript";
var count = 0;
for (var i = 0; i < str.length; i++) {
  if ('aeiou'.indexOf(str[i]) !== -1) count++;
}

console.log(count)
