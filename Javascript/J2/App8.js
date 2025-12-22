var str = "madam";
var rev = "";
for (var i = str.length - 1; i >= 0; i--) rev = rev + str[i];

console.log(rev === str);
