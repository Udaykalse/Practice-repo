let str = "madam";

let rev_Str = "";

for (let i = str.length - 1; i >= 0; i--) {
  rev_Str += str[i];
}

if (str === rev_Str) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}
