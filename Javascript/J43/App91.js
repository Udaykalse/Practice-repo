let str1 = "listen";
let str2 = "silent";

let s1 = str1.split("").sort().join("");
let s2 = str2.split("").sort().join("");

console.log(s1 === s2);
