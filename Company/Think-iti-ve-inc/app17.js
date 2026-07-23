// Write a JavaScript function to reverse a string without using the built-in reverse() method.

let str = "Thinkitive";
let reverseString = "";
for (let i = str.length-1; i >= 0; i--) {
  reverseString += str[i];
}
console.log(reverseString)